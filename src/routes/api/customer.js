const express = require('express');
const customerController = require('../../app/controllers/api/CustomerController')

const route = express.Router();

route.get('/:id', customerController.get);
route.delete('/:id', customerController.remote);
route.patch('/:id', customerController.update)
route.get('/', customerController.getAll);
route.post('/', customerController.create);


module.exports = route;