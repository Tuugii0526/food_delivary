import express from "express";
import multer from "multer";
const upload = multer();
import { getUsers, createUser, login } from "../controllers/user.js";
const userRouter = express.Router();
userRouter.get("/user", getUsers);
userRouter.post("/user", upload.array(), createUser);
userRouter.post("/login", upload.array(), login);
export default userRouter;
