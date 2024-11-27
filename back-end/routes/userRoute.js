import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";
const userRouter = express.Router();
userRouter.get("/user", getUsers);
userRouter.post("/user", createUser);
export default userRouter;
