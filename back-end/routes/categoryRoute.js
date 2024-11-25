import express from "express";
import multer from "multer";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController.js";
const upload = multer();
const categoryRouter = express.Router();
categoryRouter.get("/category", getCategories);
categoryRouter.post("/category", upload.array(), createCategory);
export default categoryRouter;
