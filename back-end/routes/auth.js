import express from "express";
import { getSpecificUser, getUsers } from "../controllers/auth.js";
const authRouter = express.Router();
authRouter.get("/auth", getUsers);
authRouter.post("/auth", getSpecificUser);
export default authRouter;
