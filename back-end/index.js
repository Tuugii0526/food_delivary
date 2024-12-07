import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import {
  foodRouter,
  categoryRouter,
  userRouter,
  orderRouter,
  authRouter,
  counterRouter,
} from "./routes/index.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { authenticateToken } from "./middleware/authenticateToken.js";
mongoose.connect(process.env.MONGODB_URL);
const app = express();
const PORT = 1234;
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api", foodRouter);
app.use("/api", userRouter);
app.use("/api", counterRouter);
app.use("/api", categoryRouter); //auth is applied
app.use("/api", orderRouter); //auth is applied
app.use("/api", authenticateToken, authRouter); //auth is applied
app.listen(PORT, () => {
  console.log(`Service started working : be aware be alert`);
});
