const Product = require('../../../models/Product');
const {multipleMongooseToObject} = require('../../../utilities/mongoose')

class SiteController {
    index(rep, res, next) {
        
   Product.find({})
   .then(data => res.render('home', {products: multipleMongooseToObject(data)}))
            
           
    }
    search(rep, res) {
        res.send("search")
    }
}

module.exports = new SiteController;