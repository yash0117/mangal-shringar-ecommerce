import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  getMyOrders,
} from "../controllers/orderController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Customer
router.post("/", protect, createOrder);
router.get("/my-orders", protect, getMyOrders);

// Admin
router.get("/", protect, adminOnly, getOrders);
router.get("/:id", protect, adminOnly, getOrderById);
router.put("/:id", protect, adminOnly, updateOrderStatus);

export default router;