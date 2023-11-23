const routerCustomer = require('./customer');
const routerProduct = require('./product');
const routerBanner = require('./banner');
const routerCategory = require('./category');
const routerAuth = require('./auth')
const express = require('express')
const router = express.Router();
const middlewareCheckToken = require('../../app/middlewares/CheckToken');

router.use('/product',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerProduct);
router.use('/banner',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerBanner);
router.use('/category',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerCategory);
router.use('/customer',middlewareCheckToken.verifyUser, middlewareCheckToken.verifyAdmin, routerCustomer);
router.use('/auth', routerAuth);

module.exports = router;