import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#6B4F2A] mb-10">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">

            <h2 className="text-3xl font-bold text-[#6B4F2A]">
              Your Cart is Empty 🛒
            </h2>

            <p className="text-gray-500 mt-4">
              Looks like you haven't added any products yet.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-[#C8A24A] text-white px-8 py-3 rounded-xl hover:bg-[#b38b2d] transition"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-5"
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-28 rounded-xl object-cover"
                    />

                    <div>

                      <h2 className="text-2xl font-semibold text-[#6B4F2A]">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {item.category}
                      </p>

                      <p className="text-[#C8A24A] font-bold text-xl mt-2">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>

                  </div>

                  <div className="text-right">

                    <p className="font-bold text-2xl text-[#6B4F2A]">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 mt-3 hover:underline"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Right */}

            <div>

              <div className="bg-white rounded-2xl shadow-md p-8 sticky top-24">

                <h2 className="text-3xl font-bold text-[#6B4F2A]">
                  Order Summary
                </h2>

                <div className="flex justify-between mt-8 text-lg">
                  <span>Items</span>

                  <span>
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex justify-between mt-5 text-lg">
                  <span>Shipping</span>

                  <span className="text-green-600">
                    FREE
                  </span>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span className="text-[#C8A24A]">
                    ₹{totalPrice}
                  </span>

                </div>

                <Link
                  to="/checkout"
                  className="block mt-8 bg-[#C8A24A] text-white text-center py-4 rounded-xl hover:bg-[#b38b2d] transition"
                >
                  Proceed to Checkout
                </Link>

              </div>

            </div>

          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default Cart;