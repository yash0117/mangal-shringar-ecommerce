import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isWishlist,
  } = useWishlist();

  if (!product) return null;

  const wishlist = isWishlist(product._id);

  const handleWishlist = () => {
    if (wishlist) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const discount =
    product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

      {/* =========================
          Product Image
      ========================= */}
      <div className="relative overflow-hidden">

        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 sm:h-60 md:h-64 object-cover group-hover:scale-110 transition duration-500"
          />
        </Link>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white p-2 sm:p-3 rounded-full shadow"
        >
          <FaHeart
            className={
              wishlist
                ? "text-red-600"
                : "text-gray-400"
            }
          />
        </button>

        {/* Discount */}
        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#C8A24A] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
          {discount > 0
            ? `${discount}% OFF`
            : "New"}
        </span>

      </div>

      {/* =========================
          Product Details
      ========================= */}
      <div className="p-3 sm:p-4 md:p-5">

        <Link to={`/product/${product._id}`}>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B4F2A] hover:text-[#C8A24A] line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm sm:text-base">

          {[...Array(Math.round(product.rating || 5))].map(
            (_, index) => (
              <FaStar key={index} />
            )
          )}

          <span className="text-gray-500 ml-1 sm:ml-2">
            ({product.rating || 5})
          </span>

        </div>

        {/* Price */}
        <div className="mt-2 sm:mt-3">

          <span className="text-xl sm:text-2xl font-bold text-[#6B4F2A]">
            ₹{product.price}
          </span>

          {product.oldPrice > 0 && (
            <span className="text-gray-400 line-through ml-2 sm:ml-3 text-sm sm:text-base">
              ₹{product.oldPrice}
            </span>
          )}

        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 sm:mt-5 w-full bg-[#C8A24A] text-white py-2.5 sm:py-3 rounded-xl hover:bg-[#b38b2d] transition text-sm sm:text-base"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;