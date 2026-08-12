import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/home/ProductCard";

import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.error("Products Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(
      products.map((item) => item.category)
    ),
  ];

  let filteredProducts = products.filter(
    (product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        product.category === category;

      return matchSearch && matchCategory;
    }
  );

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <MainLayout>

      {/* =========================
          Shop Header
      ========================= */}
      <section className="bg-[#FFFDF8] py-10 sm:py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6B4F2A] text-center">
            Shop
          </h1>

          <p className="text-center text-gray-600 mt-3 sm:mt-4">
            Browse our complete Laddu Gopal collection.
          </p>

          {/* =========================
              Search & Filters
          ========================= */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

            {/* Search */}
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 outline-none focus:border-[#C8A24A] focus:ring-1 focus:ring-[#C8A24A]"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 outline-none focus:border-[#C8A24A]"
            >
              {categories.map((cat) => (
                <option key={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 outline-none focus:border-[#C8A24A]"
            >
              <option value="">
                Sort By
              </option>

              <option value="low">
                Price Low To High
              </option>

              <option value="high">
                Price High To Low
              </option>
            </select>

          </div>

          {/* Search Result Count */}
          <p className="text-sm text-gray-500 mt-5">
            {filteredProducts.length} product
            {filteredProducts.length !== 1
              ? "s"
              : ""}{" "}
            found
          </p>

        </div>

      </section>

      {/* =========================
          Products
      ========================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {filteredProducts.length === 0 ? (

          <div className="text-center py-16">

            <h2 className="text-xl sm:text-2xl font-semibold text-[#6B4F2A]">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for another product.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              )
            )}

          </div>

        )}

      </section>

    </MainLayout>
  );
};

export default Shop;