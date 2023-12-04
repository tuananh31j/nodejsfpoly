
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    sale: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    des: {
        maxLength: 555,
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    img: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
    }
},
    { timestamps: true }

)


module.exports =  mongoose.model('Product', Product);