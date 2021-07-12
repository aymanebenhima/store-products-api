const express = require("express");
const {
  allProducts,
  relatedProduct,
  createProduct,
  showProduct,
  productById,
  removeProduct,
  updateProduct,
  searchProduct,
} = require("../controllers/productController");
const { userById } = require("../middlewares/user");
const { requireSignIn, isAuth, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router.get("/", allProducts);
router.get("/:productId", showProduct);
router.get("/related/:productId", relatedProduct);
router.post("/create/:userId", [requireSignIn, isAuth, isAdmin], createProduct);
router.post("/search", searchProduct);
router.put(
  "/:productId/:userId",
  [requireSignIn, isAuth, isAdmin],
  updateProduct
);
router.delete(
  "/:productId/:userId",
  [requireSignIn, isAuth, isAdmin],
  removeProduct
);
router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
