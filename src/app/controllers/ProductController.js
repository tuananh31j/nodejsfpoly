class ProductController {
    show(rep, res) {
        
        res.render('product/show')
    }
}

module.exports =  new ProductController;