const express = require('express');
const aboutController = require('../app/controllers/AboutController');

const router = express.Router();

router.get('/', aboutController.index)

module.exports = router;

