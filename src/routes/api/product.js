const express = require('express');
const productController = require('../../app/controllers/api/ProductController')
const route = express.Router();


route.get('/:id', productController.get);
route.delete('/:id', productController.remove);
route.put('/:id', productController.update)
route.get('/', productController.getAll);
route.post('/', productController.create);


module.exports = route