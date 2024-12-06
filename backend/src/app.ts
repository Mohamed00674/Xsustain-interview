import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { errorHandler } from "./middlewares/errorHandler.js";
import itemRoutes from "./routes/itemRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { getDirname } from "./utils/getDirname.js";

dotenv.config();

const __dirname = getDirname(import.meta.url)


const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use('/public' , express.static('public'))

app.use(morgan("dev"));
app.use(errorHandler)
app.use("/api/items",itemRoutes); 
app.use("/api/auth", authRoutes)

 if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
} 


export default app;
