
const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        require: true,
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    des: {
        maxLength: 255,
        type: String
    },
    img: {
        type: String
    },
    slug: { type: String, slug: 'name', unique: true }
},
    { timestamps: true }

)


module.exports =  mongoose.model('Product', Product);