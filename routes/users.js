const express = require('express');
const { firstController } = require('../controllers/userController')
const router = express.Router();

router.get('/', firstController)

module.exports = router