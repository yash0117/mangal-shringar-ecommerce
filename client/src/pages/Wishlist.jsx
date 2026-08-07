import MainLayout from "../layouts/MainLayout";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";


const Wishlist = () => {


  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();


  const {
    addToCart,
  } = useCart();



  return (

    <MainLayout>


      <div className="max-w-7xl mx-auto px-6 py-16">


        <h1 className="text-4xl font-bold text-[#6B4F2A] mb-10">
          My Wishlist ❤️
        </h1>



        {
          wishlistItems.length === 0 ?


          (

            <div className="bg-white shadow rounded-xl p-10 text-center">

              <h2 className="text-2xl font-semibold">
                Your Wishlist is Empty
              </h2>

              <p className="text-gray-500 mt-3">
                Save your favourite products here.
              </p>

            </div>

          )


          :


          (

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


            {
              wishlistItems.map((product)=>(


                <div
                  key={product._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >


                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />



                  <div className="p-5">


                    <h2 className="text-xl font-semibold text-[#6B4F2A]">
                      {product.title}
                    </h2>



                    <p className="text-2xl font-bold text-[#C8A24A] mt-3">
                      ₹{product.price}
                    </p>



                    <button

                      onClick={() =>
                        addToCart(product)
                      }

                      className="mt-5 w-full bg-[#C8A24A] text-white py-3 rounded-xl"

                    >
                      Add To Cart
                    </button>



                    <button

                      onClick={() =>
                        removeFromWishlist(product._id)
                      }

                      className="mt-3 w-full border border-red-500 text-red-500 py-3 rounded-xl"

                    >
                      Remove

                    </button>



                  </div>


                </div>


              ))
            }


          </div>

          )

        }



      </div>


    </MainLayout>

  );

};


export default Wishlist;