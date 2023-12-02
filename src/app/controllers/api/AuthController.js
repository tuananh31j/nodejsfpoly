const Customer = require('../../models/Customer');
const bcrypt = require('bcrypt');
const isValidateUser = require('../../validations/Customer');
const isValidateLogin = require('../../validations/Auth');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController{
    async login(rep, res, next) {
        const email = rep.body.email;
        const {error} = isValidateLogin.validate(rep.body, {abortEarly:false})
        if(error) {
            const err = error.details.map(item => item.message);
            return res.status(400).json({message: 'Có lỗi!', errors: err});
        }
        const user = await Customer.findOne({email})

        if(!user) return res.status(400).json({message: {email: 'Email không tồn tại!', phone: ''}})

        const password = await bcrypt.compare(rep.body.password, user.password);

        if(!password) return res.status(400).json({message:{password: 'Mật khẩu không đúng!', email: ''}})

        if(user && password) {
            const {password, ...others} = user._doc;
            const token = jwt.sign({
                id: user._id,
                role: user.role
            }, process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "2d"
            })
            
            return res.status(200).json({
                user: others,
                accessToken: token
            });
        }
    }

    async register(rep, res) {
        try {
            const  {error} = isValidateUser.validate(rep.body, {abortEarly:false})
            if(error) {
                const err = error.details.map(item => item.message);
                return res.status(400).json({message: 'Có lỗi!', errors: err});
            }
            
            const {email, phone, password: pass, name} = rep.body;

            const checkUserEmail = await Customer.findOne({email});
            const checkUserPhone = await Customer.findOne({phone});
            if(checkUserEmail) return res.status(400).json({message: "Email đã tồn tại!"})
            if(checkUserPhone) return res.status(400).json({message: "Phone đã tồn tại!"})
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(pass, salt);

            const newUser = await new Customer({email, phone, name, password:hashed})

            const user = await newUser.save();
            const {password, ...orther} = user;
            res.status(200).json({
                message: "Đăng ký thành công!",
                data: orther
            })
            
        } catch (error) {
            res.status(500).json({
                message:"ERR 500",
                error
            })
        }
    }
}

module.exports = new AuthController;