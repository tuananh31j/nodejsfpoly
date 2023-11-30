const Joi = require('joi')
require('dotenv').config();

const isValidationUser = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required().max(10),
    name: Joi.string().required(),
    img: Joi.string().default(process.env.AVT_DEFAULT),
    role: Joi.number().default(0).min(0).max(1)
})

module.exports = isValidationUser;