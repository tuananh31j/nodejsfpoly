const express = require('express');
const loginController = require('../../app/controllers/web/LoginController');


const router = express.Router();

router.get('/', loginController.index)

module.exports = router;

