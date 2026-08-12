import express from "express";

import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
  addReview,
} from "../controllers/productController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

import upload from "../config/upload.js";

const router = express.Router();

// =========================
// GET All Products
// =========================
router.get("/", getProducts);

// =========================
// GET Single Product
// =========================
router.get("/:id", getProductById);

// =========================
// ADD Product with Image Upload
// =========================
router.post(
  "/",
  upload.single("image"),
  addProduct
);

// =========================
// DELETE Product
// =========================
router.delete("/:id", deleteProduct);

// =========================
// UPDATE Product
// =========================
router.put("/:id", updateProduct);

// =========================
// ADD Review
// =========================
router.post(
  "/:id/reviews",
  protect,
  addReview
);

export default router;