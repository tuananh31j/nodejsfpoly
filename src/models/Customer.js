const { truncateSync } = require('fs');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
require('dotenv').config()

const Customer = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        default: process.env.AVT_DEFAULT
    },
    password:{
        required: true,
        type: String,
    },
    role: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

module.exports = mongoose.model('Customer', Customer)