const express = require('express');
const { firstController, signup } = require('../controllers/userController')
const { userSignUpValidator } = require('../middlewares/userValidator')
const router = express.Router();

router.get('/', firstController);

router.post('/signup', userSignUpValidator, signup);

module.exports = router;