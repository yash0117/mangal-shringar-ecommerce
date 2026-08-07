import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Success = () => {
  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-6">

        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">

          <div className="text-6xl mb-5">
            🎉
          </div>

          <h1 className="text-4xl font-bold text-[#6B4F2A]">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600 mt-5">
            Thank you for shopping with
            <span className="font-semibold text-[#C8A24A]">
              {" "}Mangal Shringar
            </span>.
          </p>

          <p className="text-gray-500 mt-2">
            Your order has been received. We will contact you soon.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-[#C8A24A] text-white px-8 py-3 rounded-xl hover:bg-[#b38b2d] transition"
          >
            Continue Shopping
          </Link>

        </div>

      </div>
    </MainLayout>
  );
};

export default Success;