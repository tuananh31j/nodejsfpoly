const express = require('express');
const productController = require('../../app/controllers/web/ProductController');


const router = express.Router();

router.get('/:slug', productController.show)

module.exports = router;

