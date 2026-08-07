import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#FFFDF8] px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-4xl font-bold text-[#6B4F2A] mb-8 text-center">
            My Profile
          </h1>

          {user ? (
            <>
              <div className="space-y-5 text-lg">

                <div className="border-b pb-3 flex justify-between">
                  <span className="font-semibold">Name</span>
                  <span>{user.name}</span>
                </div>

                <div className="border-b pb-3 flex justify-between">
                  <span className="font-semibold">Email</span>
                  <span>{user.email}</span>
                </div>

                <div className="border-b pb-3 flex justify-between">
                  <span className="font-semibold">Account Type</span>
                  <span className="text-green-600 font-semibold">
                    Customer
                  </span>
                </div>

              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4">

                <Link
                  to="/orders"
                  className="flex-1 bg-[#C8A24A] text-white text-center py-3 rounded-xl hover:bg-[#b38b2d] transition"
                >
                  My Orders
                </Link>

                <Link
                  to="/shop"
                  className="flex-1 border border-[#C8A24A] text-[#6B4F2A] text-center py-3 rounded-xl hover:bg-[#FFF8E8] transition"
                >
                  Continue Shopping
                </Link>

              </div>
            </>
          ) : (
            <div className="text-center">

              <p className="text-gray-500 mb-6">
                Please login first.
              </p>

              <Link
                to="/login"
                className="bg-[#C8A24A] text-white px-6 py-3 rounded-xl"
              >
                Login
              </Link>

            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;