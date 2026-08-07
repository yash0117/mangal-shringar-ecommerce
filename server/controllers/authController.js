import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


// =========================
// Register User
// =========================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });


    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });


  } catch (error) {

    console.error("Register Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// Login User
// =========================
export const loginUser = async (req, res) => {
    
    console.log("JWT SECRET:", process.env.JWT_SECRET);

  try {

    

    const { email, password } = req.body;


    const user = await User.findOne({ email });


    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    const isMatch = await bcrypt.compare(
      password,
      user.password
    );


    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }



    const token = generateToken(user);



    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });



  } catch (error) {

    console.error("Login Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};