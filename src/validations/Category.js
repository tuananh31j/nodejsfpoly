const Joi = require('joi')

const isValidationCate = Joi.object({
    name: Joi.string().required().max(20),
})

module.exports = isValidationCate;