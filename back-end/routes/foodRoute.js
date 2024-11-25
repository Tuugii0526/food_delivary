import express from "express";
import multer from "multer";
import { createFood, getFoods } from "../controllers/foodController.js";
const upload = multer();
const foodRouter = express.Router();
foodRouter.get("/food", getFoods);
foodRouter.post("/food", upload.single("image"), createFood);
export default foodRouter;
