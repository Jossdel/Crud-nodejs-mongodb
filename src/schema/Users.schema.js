import mongoose from "mongoose";
// Definir un esquema de usuario
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Crear el modelo de usuario
const User = mongoose.model("User", userSchema);

export default User;
