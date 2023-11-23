const express = require('express');
const categoryController = require('../../app/controllers/api/CategoryController');
const route = express.Router();

route.delete('/:id', categoryController.remove);
route.get('/:id', categoryController.get);
route.patch('/:id', categoryController.update);
route.post('/', categoryController.add);
route.get('/', categoryController.getAll);


module.exports = route