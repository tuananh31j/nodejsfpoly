const express = require('express');
const productController = require('../../app/controllers/ProductController');


const router = express.Router();

router.use('/:slug', productController.show)

module.exports = router;

