const Product = require('../../models/Product.js')
const isValidationPro = require('../../validations/Product.js')
class ProductController {
    getAll(rep, res, next) {
        const page = rep.query._page || 1;
        const limit = rep.query._limit || 0;
        const cate = rep.query.category_id ? {category_id: rep.query.category_id}: {};
        
        Product.find(cate)
        .populate('category_id')
        .skip((page - 1) * limit)
        .limit(limit)
        .then(data => res.status(200).json(data))
        .catch(next)
    }
    
    get(rep, res, next) {
        const id = rep.params.id;
        Product.findById(id)
        .exec()
        .then(data => {
            if(data) return res.status(200).json(data);
            return res.status(400).json({
                message: "Không tồn tại!"
            })
         }) 
        .catch(err => res.status(500).json({message: "lỗi", err}))      
    }

    create(rep, res, next) {
        try {
            const data = rep.body;
        const {error} = isValidationPro.validate(data, {abortEarly:false});


        if(data && !error) {
            Product.create(rep.body)
            .then(data => res.status(200).json({
                message: "Thêm thành công!",
                data: data
            }))
            .catch(next)
        }else{
            const err = error.details.map(item => item.message);
            res.status(400).json({
                message: "Thêm mới không thành công!",
                err
            })
        }
        } catch (error) {
            res.status(500).json({message: "Lỗi"})
        }
    }

    async remove(rep, res, next) {
        try {
            const id = rep.params.id;
            const data = await Product.findByIdAndDelete(id)
                res.status(200).json({
                    message: 'Xoa thanh cong!',
                    data})
        } catch (err) {
            res.status(400).json(err)
        }
    }

    async update(rep, res, next) {
        try {
            const data = rep.body;
            const item = await Product.findByIdAndUpdate(rep.params.id,data)
            res.status(200).json({
                message: "Cập nhật thành công!",
                data
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new ProductController;