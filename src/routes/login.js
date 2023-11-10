const express = require('express');
const loginController = require('../app/controllers/LoginController');


const router = express.Router();

router.get('/', loginController.index)

module.exports = router;

