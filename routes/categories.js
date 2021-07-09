const express = require("express");
const { createCategory } = require('../controllers/categoryController');
const { userById } = require("../middlewares/user");
const { requireSignIn, isAuth, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createCategory);
router.param("userId", userById);

module.exports = router;