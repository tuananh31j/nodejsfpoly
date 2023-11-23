const Product = require('../../../models/Product')
class ProductController {
    getAll(rep, res, next) {
        const page = rep.query._page || 1;
        const limit = rep.query._limit || 0;
        
        Product.find({})
        .skip(page - 1 * limit)
        .limit(limit)
        .then(data => res.json(data))
        .catch(next)
    }
    
    get(rep, res, next) {
        const id = rep.params.id;
        Product.findById(id)
        .exec()
        .then(data => res.json(data)) 
        .catch(next)      
    }

    create(rep, res, next) {
        const data = rep.body;

        if(data) {
            Product.create(rep.body)
            .then(data => res.json({
                message: "Thêm thành công!",
                data: data
            }))
            .catch(next)
        }else{
            res.status(400).json({
                message: "Thêm mới không thành công!"
            })
        }
    }

    async remove(rep, res, next) {
        try {
            const id = rep.params.id;
            const data = await Product.findByIdAndDelete(id)
                res.json({
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
            res.json({
                message: "Cập nhật thành công!",
                data
            })
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = new ProductController;