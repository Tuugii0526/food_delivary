import express from "express";
import multer from "multer";
import {
  createCategory,
  getCategories,
  deleteCategory,
  editCategory,
} from "../controllers/category.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
const upload = multer();
const categoryRouter = express.Router();
categoryRouter.get("/category", getCategories);
categoryRouter.post(
  "/category",
  authenticateToken,
  upload.array(),
  createCategory
);
categoryRouter.delete("/category", authenticateToken, deleteCategory);
categoryRouter.put("/category", authenticateToken, editCategory);
export default categoryRouter;
