import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach JWT Token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= CUSTOMER =================

// Place Order
export const placeOrder = (orderData) =>
  API.post("/orders", orderData);

// My Orders
export const getMyOrders = () =>
  API.get("/orders/my-orders");

// ================= ADMIN =================

// Get All Orders
export const getOrders = () =>
  API.get("/orders");

// Get Single Order
export const getOrderById = (id) =>
  API.get(`/orders/${id}`);

// Update Order Status
export const updateOrderStatus = (id, status) =>
  API.put(`/orders/${id}`, {
    orderStatus: status,
  });

export default API;