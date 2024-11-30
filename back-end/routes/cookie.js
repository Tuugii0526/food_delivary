import express from "express";
import { getCookie, setCookie } from "../controllers/cookie.js";
const cookieRouter = express.Router();
cookieRouter.get("/get-cookie", getCookie);
cookieRouter.get("/set-cookie", setCookie);
export default cookieRouter;
