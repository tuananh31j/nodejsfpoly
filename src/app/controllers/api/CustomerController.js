const Customer = require('../../../models/Customer');
const bcrypt = require('bcrypt');

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
        .catch(next)
    }

    async create(rep, res, next) {
        try {
            const user = await Customer.create(rep.body);
            res.status(200).json({
                message:"Thêm mới thành công!",
                data: user
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
            res.status(200).json({
                message:'Cap nhat thanh cong!',
                data: rep.body
            })
        } catch (error) {
            
        }
    }
}

module.exports = new CustomerController;