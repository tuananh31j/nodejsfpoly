const Customer = require('../../models/Customer');
const bcrypt = require('bcrypt');
const isValidateUser = require('../../validations/Customer');
const isValidateLogin = require('../../validations/Auth');

class CustomerController {
    getAll(rep, res, next) {
        Customer.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }

    get(rep, res, next) {
        const id = rep.params.id;
        Customer.findById(id)
        .exec()
        .then(data => res.json(data))
        .catch(() => res.status(500).json({message: 'Lỗi'}))
    }

    async create(rep, res, next) {
        try {
            const  {error} = isValidateUser.validate(rep.body, {abortEarl:false})
            if(error) {
                const err = error.details.map(item => item.message);
                return res.status(400).json({message: 'Có lỗi!', errors: err});
            }
            const {email, phone} = rep.body;
            const checkUser = await Customer.findOne({email, phone});
            if(checkUser) return res.status(400).json({message: "email hoặc số điện thoại đã tồn tại!"})
            const {password: pass, ...others} = rep.body;
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(pass, salt);
      
            const newUser = {...others, password:hashed}
            const user = await Customer.create(newUser);
            const {password, ...rest} = user._doc;
            

            res.status(200).json({
                message:"Thêm mới thành công!",
                data: rest
            })

        } catch (error) {
            res.status(500).json({
                message:"có lỗi",
                error
            })
        }
        

        
    }

    remote(rep, res, next) {
        try {
            const id = rep.params.id;
            Customer.findOneAndDelete(id)
            .then(data => res.json({
                message:"Xoa thanh cong!",
                data
            }))
        } catch (error) {
            res.status(500).json({error})
        }
    }

    async update(rep, res) {
        try {
            const id = rep.params.id;

            const user = await Customer.findByIdAndUpdate(id, rep.body); 
            if(!user) return res.status(400).json({mesage: "User không tồn tại"})
            const userNew = await Customer.findById(id);
            return res.status(200).json({
                message:'Cap nhat thanh cong!',
                data: userNew
            })
        } catch (error) {
            res.status(500).json({message: "lỗi"})
            
        }
    }
}

module.exports = new CustomerController;