import Product from "../../models/product";
import { multipleMongooseToObject } from "../../utilities/mongoose";

class SiteController {
    index(rep, res, next) {
        const products = [
            {name: 'hah',
            price: 200,
            img: " https://picsum.photos/200/300"
        },
        {name: 'hah',
            price: 200,
            img: " https://picsum.photos/200/300"
        },
        {name: 'hah',
            price: 200,
            img: " https://picsum.photos/200/300"
        },
        {name: 'hah',
            price: 200,
            img: " https://picsum.photos/200/300"
        }
        ]
   
            res.render('home', {products})
           
    }
    search(rep, res) {
        res.send("search")
    }
}

export default new SiteController;