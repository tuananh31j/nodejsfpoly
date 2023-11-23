const Category = require('../../../models/Category')

class CategoryController{
    async add(rep,res) {
        try {
            const name = rep.body.name;
            const newCategory = await new Category({name});
            const category = await newCategory.save();
            res.status(200).json({
                message:'Thêm mới thành công!',
                category
            }) 
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(rep,res) {
        try {
            const data= {name: rep.body.name};
            const category = await Category.findByIdAndUpdate(rep.params.id, data);
            res.status(200).json({
                message:'Cap nhat thanh cong!',
                data
            })
        } catch (error) {
            res.status(500).json({error})
            
        }
    }
    
    async remove(rep, res) {
        const id = rep.params.id;
        const data = await Category.findByIdAndDelete(id)
        res.status(200).json({
            message: "Xoa thanh cong!",
            data
        })
    }

    async get(rep, res) {
        try {
            const id = rep.params.id;
            const data = await Category.findById(id);
            res.status(200).json({
                data
            })
        } catch (error) {
            res.status(500).json({error})
        }
    }

    async getAll(rep, res) {
        try {
            const data = await Category.find();
            res.status(200).json({data})
        } catch (error) {
            res.status(500).json({error})
        }
    }
}

module.exports = new CategoryController;