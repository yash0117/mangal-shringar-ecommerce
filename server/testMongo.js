import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './server/.env' });

const uri = process.env.MONGO_URI;
const opts = {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
};

(async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(uri, opts);
    console.log('✅ Connected to MongoDB:', conn.connection.host);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Connect error:', err);
    process.exit(1);
  }
})();
