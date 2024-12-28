import { Router } from "express";
import mongoose from "mongoose";
const router2 = Router();

// Definir un esquema de usuario
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Crear el modelo de usuario
const User = mongoose.model("User", userSchema);

// Ruta GET para obtener todos los usuarios
router2.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send("Error interno del servidor");
  }
});
export { User };
export default router2;
