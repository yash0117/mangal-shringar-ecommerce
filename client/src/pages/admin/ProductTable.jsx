import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../api/productApi";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      alert("✅ Product Deleted Successfully");

      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8 overflow-x-auto">
      <h2 className="text-2xl font-bold text-[#6B4F2A] mb-6">
        All Products
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Category</th>
            <th className="text-left">Price</th>
            <th className="text-left">Stock</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </td>

              <td>{product.title}</td>

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>{product.stock}</td>

              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;