import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        require: true,
        type: String
    },
    price: {
        type: Number
    },
    des: {
        maxLength: 255,
        type: String
    },
    slug: { type: String, slug: 'name', unique: true }
})


export default mongoose.model('Product', Product);