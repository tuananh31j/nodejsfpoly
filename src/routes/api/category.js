const express = require('express');
const categoryController = require('../../app/controllers/api/CategoryController');
const middlewareCheckToken = require('../../middlewares/CheckToken');
const route = express.Router();

route.delete('/:id',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, categoryController.remove);
route.get('/:id', categoryController.get);
route.patch('/:id',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, categoryController.update);
route.post('/',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, categoryController.add);
route.get('/', categoryController.getAll);


module.exports = route