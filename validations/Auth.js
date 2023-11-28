const Joi = require('joi')

const isValidateLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = isValidateLogin;