import mongoose from "mongoose";

// MongoDB connection with error handling
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log("MongoDB connected successfully.");
    } catch (error) {
      console.error("MongoDB connection failed:", error);
      process.exit(1);
    }
  }
  export default connectToMongoDB;