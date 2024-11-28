import express from "express";
import multer from "multer";
import { createFood, deleteFood, getFoods } from "../controllers/food.js";
const upload = multer();
const foodRouter = express.Router();
foodRouter.get("/food", getFoods);
foodRouter.post("/food", upload.single("image"), createFood);
foodRouter.delete("/food", deleteFood);
export default foodRouter;
