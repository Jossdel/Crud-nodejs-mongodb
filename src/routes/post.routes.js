import { Router } from "express";
import User from "./get.routes.js";
const router = Router();

// Ruta POST para crear un usuario
router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validación básica
    if (!name || !email || !password) {
      return res.status(400).send("Todos los campos son obligatorios");
    }

    // Crear un nuevo usuario
    const newUser = new User({ name, email, password });
    const result = await newUser.save();

    res.status(201).send({
      message: "Usuario creado exitosamente",
      user: result,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Error de duplicado (campo único como email)
      res.status(400).send("El correo electrónico ya está registrado");
    } else {
      console.error("Error al crear usuario:", error);
      res.status(500).send("Error interno del servidor");
    }
  }
});

export default router;
