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
          product.oldPrice) * 100
        )
      : 0;




  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">



      <div className="relative overflow-hidden">



        <Link to={`/product/${product._id}`}>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

        </Link>





        <button

          onClick={handleWishlist}

          className="absolute top-3 right-3 bg-white p-3 rounded-full shadow"

        >

          <FaHeart

            className={
              wishlist
              ? "text-red-600"
              : "text-gray-400"
            }

          />

        </button>





        <span className="absolute top-3 left-3 bg-[#C8A24A] text-white text-sm px-3 py-1 rounded-full">

          {
            discount > 0
            ? `${discount}% OFF`
            : "New"
          }

        </span>



      </div>








      <div className="p-5">



        <Link to={`/product/${product._id}`}>

          <h3 className="text-xl font-semibold text-[#6B4F2A] hover:text-[#C8A24A]">

            {product.title}

          </h3>

        </Link>







        <div className="flex items-center gap-1 mt-2 text-yellow-500">


          {
            [...Array(Math.round(product.rating || 5))]
            .map((_, index) => (

              <FaStar key={index} />

            ))
          }



          <span className="text-gray-500 ml-2">

            ({product.rating || 5})

          </span>


        </div>








        <div className="mt-3">


          <span className="text-2xl font-bold text-[#6B4F2A]">

            ₹{product.price}

          </span>




          {
            product.oldPrice > 0 && (

              <span className="text-gray-400 line-through ml-3">

                ₹{product.oldPrice}

              </span>

            )
          }



        </div>







        <button

          onClick={() => addToCart(product)}

          className="mt-5 w-full bg-[#C8A24A] text-white py-3 rounded-xl hover:bg-[#b38b2d] transition"

        >

          Add to Cart

        </button>





      </div>



    </div>

  );

};


export default ProductCard;