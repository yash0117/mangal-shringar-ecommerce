import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../api/productApi";

const FeaturedProducts = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
  try {
    const res = await getProducts();

    console.log("========== API DEBUG ==========");
    console.log(res);
    console.log(res.data);
    console.log(Array.isArray(res.data));
    console.log(res.data.length);
    console.log("===============================");

    setProducts(res.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#6B4F2A]">
            Loading Products...
          </h2>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-20 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#6B4F2A]">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-3">
            Please add some products from the admin panel.
          </p>
        </div>
      </section>
    );
  }

  const displayProducts = limit
    ? products.slice(0, limit)
    : products;

  return (
    <section className="bg-[#FFFDF8] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#6B4F2A]">
          Featured Products
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Explore our most loved Laddu Gopal collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;