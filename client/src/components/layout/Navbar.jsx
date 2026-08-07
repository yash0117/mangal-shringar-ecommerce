import { NavLink, Link, useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import logo from "../../assets/images/logo.png";


import {
  FaShoppingCart,
  FaUser,
  FaHeart,
} from "react-icons/fa";



const Navbar = () => {


  const { cartItems } = useCart();


  const { wishlistItems } = useWishlist();


  const navigate = useNavigate();



  const user = JSON.parse(
    localStorage.getItem("user")
  );



  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful 🎉");

    navigate("/login");

  };



  return (

    <header className="sticky top-0 z-50 bg-white shadow-md">


      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">



        {/* Logo */}

        <Link 
          to="/"
          className="flex items-center gap-3"
        >


          <img
            src={logo}
            alt="Mangal Shringar Logo"
            className="w-14 h-14 rounded-full object-cover"
          />


          <div>

            <h1 className="text-2xl font-bold text-[#6B4F2A]">
              Mangal Shringar
            </h1>


            <p className="text-xs text-gray-500">
              Prem Se, Shringar Unke Liye
            </p>


          </div>


        </Link>





        {/* Navigation */}


        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">


          <NavLink
            to="/"
            className="hover:text-[#C8A24A]"
          >
            Home
          </NavLink>



          <NavLink
            to="/shop"
            className="hover:text-[#C8A24A]"
          >
            Shop
          </NavLink>



          <NavLink
            to="/about"
            className="hover:text-[#C8A24A]"
          >
            About
          </NavLink>



          <NavLink
            to="/contact"
            className="hover:text-[#C8A24A]"
          >
            Contact
          </NavLink>



        </nav>







        {/* Right Section */}


        <div className="flex items-center gap-5">





          {/* Cart */}


          <Link
            to="/cart"
            className="relative"
          >


            <FaShoppingCart 
              className="text-xl hover:text-[#C8A24A]"
            />



            {
              cartItems.length > 0 && (

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                  {cartItems.length}

                </span>

              )
            }


          </Link>







          {/* Wishlist */}


          <Link
            to="/wishlist"
            className="relative"
          >


            <FaHeart
              className="text-xl text-red-500 hover:text-red-600"
            />



            {
              wishlistItems.length > 0 && (

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                  {wishlistItems.length}

                </span>

              )
            }



          </Link>









          {/* User */}


          {
            user ? (


              <div className="flex items-center gap-3">



                <Link
                  to="/profile"
                  className="hidden md:flex items-center gap-2 text-[#6B4F2A] font-semibold hover:text-[#C8A24A]"
                >


                  <FaUser />

                  Hi, {user.name}


                </Link>





                <button

                  onClick={handleLogout}

                  className="bg-[#C8A24A] text-white px-4 py-2 rounded-lg hover:bg-[#b38b2d]"

                >

                  Logout

                </button>



              </div>



            )



            :



            (


              <div className="flex items-center gap-3">


                <Link
                  to="/login"
                  className="flex items-center gap-2 text-[#6B4F2A]"
                >

                  <FaUser />

                  Login

                </Link>



                <Link

                  to="/register"

                  className="bg-[#C8A24A] text-white px-4 py-2 rounded-lg"

                >

                  Register

                </Link>


              </div>


            )

          }




        </div>


      </div>


    </header>

  );

};



export default Navbar;