import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.js";
import itemRoutes from "./routes/itemRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());


app.use(morgan("dev"));
app.use(errorHandler)
app.use("/api/items",itemRoutes); 
app.use("/api/auth" , authRoutes )


export default app;
