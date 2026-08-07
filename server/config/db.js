import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log("❌ MONGO_URI is not defined in environment");
      process.exit(1);
    }

    const opts = {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    };

    const conn = await mongoose.connect(process.env.MONGO_URI, opts);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error.message || error);
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;