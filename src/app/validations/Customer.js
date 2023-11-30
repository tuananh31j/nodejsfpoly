const Joi = require('joi')

const isValidationUser = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required().max(10),
    name: Joi.string().required()
})

module.exports = isValidationUser;