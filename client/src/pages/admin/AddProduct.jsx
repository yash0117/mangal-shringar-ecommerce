import { useState } from "react";
import { addProduct } from "../../api/productApi";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    oldPrice: "",
    category: "",
    stock: "",
    rating: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select a product image.");
      return;
    }

    try {
      await addProduct(formData, imageFile);

      alert("✅ Product Added Successfully!");

      setFormData({
        title: "",
        description: "",
        price: "",
        oldPrice: "",
        category: "",
        stock: "",
        rating: "",
      });

      setImageFile(null);

      // Reset file input
      e.target.reset();
    } catch (error) {
      console.error("ADD PRODUCT ERROR:", error);
      alert(
        error.response?.data?.message ||
        "Something went wrong while adding product!"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-[#6B4F2A] mb-8">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Title */}
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            rows="4"
            required
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Old Price */}
          <input
            type="number"
            name="oldPrice"
            placeholder="Old Price"
            value={formData.oldPrice}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-lg p-3 bg-white"
              required
            />

            {imageFile && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {imageFile.name}
              </p>
            )}
          </div>

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          {/* Stock */}
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          {/* Rating */}
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#C8A24A] text-white py-3 rounded-lg hover:bg-[#b28d3f] transition"
          >
            Add Product
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddProduct;