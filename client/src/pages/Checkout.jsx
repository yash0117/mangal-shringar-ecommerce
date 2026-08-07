import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../api/orderApi";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        ...formData,

        products: cartItems.map((item) => ({
          productId: item._id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),

        totalAmount: totalPrice,

        paymentMethod: "Cash on Delivery",
      };

      const res = await placeOrder(orderData);

      if (res.data.success) {
        alert("🎉 Order Placed Successfully!");

        clearCart();

        navigate("/success");
      }
    } catch (error) {
      console.error(error);

      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#6B4F2A] mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-8 space-y-5"
          >

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 outline-none"
            />

            <textarea
              name="address"
              rows="4"
              placeholder="Complete Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 outline-none"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 outline-none"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 outline-none"
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full border rounded-xl p-4 outline-none"
            />

            <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4">
              <h3 className="font-semibold">
                Payment Method
              </h3>

              <p className="mt-2">
                Cash On Delivery (COD)
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C8A24A] text-white py-4 rounded-xl hover:bg-[#b38b2d] transition disabled:opacity-60"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>

          </form>

          {/* Right */}

          <div className="bg-white rounded-2xl shadow-md p-8 h-fit">

            <h2 className="text-3xl font-bold text-[#6B4F2A]">
              Order Summary
            </h2>

            <div className="space-y-4 mt-8">

              {cartItems.map((item) => (

                <div
                  key={item._id}
                  className="flex justify-between"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>

                </div>

              ))}

            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span className="text-[#C8A24A]">
                ₹{totalPrice}
              </span>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Checkout;