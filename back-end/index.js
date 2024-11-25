import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
mongoose.connect(process.env.MONGODB_URL);
const app = express();
const PORT = 1234;
app.use(cors());
app.use("/api", foodRouter);
app.use("/api", categoryRouter);
app.listen(PORT, () => {
  console.log(`Service started working : be aware be alert`);
});
