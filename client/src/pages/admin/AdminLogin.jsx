import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;

      // Only admin can enter
      if (user.role !== "admin") {
        alert("❌ Admin access only!");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("✅ Admin Login Successful!");

      navigate("/admin");
    } catch (error) {
      console.error("Admin Login Error:", error);

      alert(
        error.response?.data?.message ||
        "Admin login failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-[#E8D7B0]">

        {/* Logo / Brand */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C8A24A] flex items-center justify-center text-white text-2xl font-bold">
            MS
          </div>

          <h1 className="text-3xl font-bold text-[#6B4F2A]">
            Mangal Shringar
          </h1>

          <p className="text-gray-500 mt-2">
            Admin Login
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Email
            </label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#C8A24A]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#C8A24A]"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C8A24A] text-white py-3 rounded-lg font-semibold hover:bg-[#B28D3F] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Admin Login"}
          </button>

        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Authorized admin access only
        </p>

      </div>

    </div>
  );
};

export default AdminLogin;