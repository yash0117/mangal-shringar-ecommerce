import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      const res = await registerUser(formData);


      if (res.data.success) {

        alert("Registration Successful 🎉");

        navigate("/login");

      }


    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
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
          Create Account
        </h1>


        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl mb-4"
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl mb-4"
          required
        />


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl mb-6"
          required
        />


        <button
          disabled={loading}
          className="w-full bg-[#C8A24A] text-white py-3 rounded-xl"
        >
          {
            loading
            ? "Creating..."
            : "Register"
          }
        </button>


      </form>

    </div>

  );

};


export default Register;