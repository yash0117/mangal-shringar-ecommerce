import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await loginUser(formData);


      if (res.data.success) {

        login(
          res.data.user,
          res.data.token
        );

        alert("Login Successful 🎉");

        if (res.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }

      }


    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF8] px-6">


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >


        <h1 className="text-3xl font-bold text-[#6B4F2A] text-center mb-6">
          Login
        </h1>


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-xl mb-4"
        />


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-xl mb-6"
        />


        <button
          disabled={loading}
          className="w-full bg-[#C8A24A] text-white py-3 rounded-xl"
        >

          {
            loading
              ? "Logging in..."
              : "Login"
          }

        </button>


      </form>


    </div>

  );

};


export default Login;