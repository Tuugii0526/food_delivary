import express from "express";
import { getSpecificUser, getUsers } from "../controllers/auth.js";
import { authenticateToken } from "../middleware/authenticateToken.js";

const authRouter = express.Router();
// authRouter.use(authenticateToken);
authRouter.get("/auth", authenticateToken, getUsers);
authRouter.post("/auth", getSpecificUser);
export default authRouter;
