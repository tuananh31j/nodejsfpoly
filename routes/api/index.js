const routerCustomer = require('./customer');
const routerProduct = require('./product');
const routerBanner = require('./banner');
const routerCategory = require('./category');
const routerAuth = require('./auth')
const express = require('express')
const router = express.Router();
const middlewareCheckToken = require('../../app/middlewares/CheckToken');

router.use('/products',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerProduct);
router.use('/banners',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerBanner);
router.use('/categories',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerCategory);
router.use('/customers',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerCustomer);


router.use('/auth', routerAuth);

router.use('/products', routerProduct);
router.use('/banners', routerBanner);
router.use('/categories', routerCategory);
router.use('/customers', routerCustomer);

module.exports = router;