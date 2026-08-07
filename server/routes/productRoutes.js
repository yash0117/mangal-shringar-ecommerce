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


const router = express.Router();



// Get All Products
router.get("/", getProducts);



// Get Single Product
router.get("/:id", getProductById);



// Add Product with Image Upload
router.post("/", addProduct);


// Delete Product
router.delete("/:id", deleteProduct);



// Update Product
router.put("/:id", updateProduct);



// Add Review
router.post(
  "/:id/reviews",
  protect,
  addReview
);


export default router;