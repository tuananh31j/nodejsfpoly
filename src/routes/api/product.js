const express = require('express');
const productController = require('../../app/controllers/api/ProductController');
const middlewareCheckToken = require('../../middlewares/CheckToken');
const route = express.Router();


route.get('/:id', productController.get);
route.delete('/:id',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, productController.remove);
route.patch('/:id',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, productController.update)
route.get('/', productController.getAll);
route.post('/',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, productController.create);


module.exports = route