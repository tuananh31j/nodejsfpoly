
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
    sale: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    des: {
        maxLength: 555,
        type: String
    },
    view: {
        type: Number,
        default: 0
    },
    img: {
        type: String
    },
    category_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    }
},
    { timestamps: true }

)


module.exports =  mongoose.model('Product', Product);