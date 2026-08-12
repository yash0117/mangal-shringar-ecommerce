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

// Add Product with Image
export const addProduct = (data, imageFile) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append("oldPrice", data.oldPrice);
  formData.append("category", data.category);
  formData.append("stock", data.stock);
  formData.append("rating", data.rating);

  if (imageFile) {
    formData.append("image", imageFile);
  }

  return API.post("/products", formData);
};

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