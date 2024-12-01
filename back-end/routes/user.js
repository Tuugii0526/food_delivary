import express from "express";
import multer from "multer";
const upload = multer();
import { createUser, login } from "../controllers/user.js";
const userRouter = express.Router();
userRouter.post("/user", upload.array(), createUser);
userRouter.post("/login", upload.array(), login);
export default userRouter;
