const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

const Banner =  new Schema({
    name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    menu: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Banner', Banner)


