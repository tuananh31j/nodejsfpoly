const router = require('express').Router();
const authController = require('../../app/controllers/api/AuthController')

router.post('/login', authController.login);
router.post('/registor', authController.registor);

module.exports = router;