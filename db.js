import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log("Conectado a la base de datos MongoDB");
  } catch (error) {
    console.error("Error al conectar a la base de datos MongoDB:", error);
    process.exit(1);
  }
};

connectDB();

export default connectDB;
