import express from "express";
import dotenv from "dotenv";
import router from "./routes/post.routes.js";
import router2 from "./routes/get.routes.js";
import connectDB from "../db.js";

dotenv.config();
const app = express();

connectDB();
app.use(express.json());

app.use(router);
app.use(router2);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("servidor Escuchando en Puerto", PORT);
});
