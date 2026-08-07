import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add JWT token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= Products =================

// Get All Products
export const getProducts = () => API.get("/products");

// Get Single Product
export const getProductById = (id) =>
  API.get(`/products/${id}`);

// Add Product
export const addProduct = (data) =>
  API.post("/products", data);

// Update Product
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);

// Delete Product
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

// Add Review
export const addReview = (id, data) =>
  API.post(`/products/${id}/reviews`, data);

export default API;