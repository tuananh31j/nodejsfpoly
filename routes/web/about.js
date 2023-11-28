const express = require('express');
const aboutController = require('../../app/controllers/web/AboutController');

const router = express.Router();

router.get('/', aboutController.index)

module.exports = router;

