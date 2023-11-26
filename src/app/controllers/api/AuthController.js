const Customer = require('../../../models/Customer');
const bcrypt = require('bcrypt');
const isValidateUser = require('../../../validations/Customer');
const isValidateLogin = require('../../../validations/Auth');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthController{
    async login(rep, res, next) {
        const email = rep.body.email;
        const {error} = isValidateLogin.validate(rep.body, {abortEarly:false})
        if(error) {
            const err = error.details.reduce((errors, curErr) => [...errors, curErr.message], []);
            return res.status(400).json({message: 'Có lỗi!', errors: err});
        }
        const user = await Customer.findOne({email})

        if(!user) return res.status(400).json({message: 'Email không tồn tại!'})

        const password = await bcrypt.compare(rep.body.password, user.password);

        if(!password) return res.status(400).json({message:'Mật khẩu không đúng!'})

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

    async registor(rep, res) {
        try {
            const  {error} = isValidateUser.validate(rep.body, {abortEarly:false})
            if(error) {
                const err = error.details.reduce((errors, curErr) => [...errors, curErr.message], []);
                return res.status(400).json({message: 'Có lỗi!', errors: err});
            }
            const email = rep.body.email;
            const phone = rep.body.phone;
            const password = rep.body.password;
            const name = rep.body.name;

            const checkUser = await Customer.findOne({email, phone});
            if(checkUser) return res.status(400).json({message: "email hoặc số điện thoại đã tồn tại!"})
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);

            const newUser = await new Customer({email, phone, name, password:hashed})

            const user = await newUser.save()
            res.status(200).json({
                message: "Đăng ký thành công!",
                data: user
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