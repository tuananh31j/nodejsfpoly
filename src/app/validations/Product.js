const Joi = require('joi')

const isValidationPro = Joi.object({
    name: Joi.string().required().max(70),
    price: Joi.number().required(),
    sale: Joi.number().min(0).max(100).default(0),
    des: Joi.string().required().max(500),
    view: Joi.number().default(0),
    img: Joi.string(),
    category_id: Joi.string()
})

module.exports = isValidationPro;