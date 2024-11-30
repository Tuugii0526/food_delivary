import express from "express";
import multer from "multer";
const upload = multer();
import { getUsers, createUser } from "../controllers/user.js";
const userRouter = express.Router();
userRouter.get("/user", getUsers);
userRouter.post("/user", upload.single("image"), createUser);
export default userRouter;
