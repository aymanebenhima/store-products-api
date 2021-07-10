const express = require("express");
const {
  allCategories,
  createCategory,
  showCategory,
  categoryById,
  updateCategory,
  removeCategory,
} = require("../controllers/categoryController");
const { userById } = require("../middlewares/user");
const { requireSignIn, isAuth, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router.get("/", allCategories);
router.get("/:categoryId", showCategory);
router.post(
  "/create/:userId",
  [requireSignIn, isAuth, isAdmin],
  createCategory
);
router.put(
  "/:categoryId/:userId",
  [requireSignIn, isAuth, isAdmin],
  updateCategory
);
router.delete(
  "/:categoryId/:userId",
  [requireSignIn, isAuth, isAdmin],
  removeCategory
);
router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
