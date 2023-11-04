import Product from "../../models/product";
import { multipleMongooseToObject } from "../../utilities/mongoose";

class SiteController {
    index(rep, res, next) {
        Product.find({})
            .then(products => res.render('home', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)
    }
    search(rep, res) {
        res.send("search")
    }
}

export default new SiteController;