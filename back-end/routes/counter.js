import express from "express";
import { getCounters, createCounter } from "../controllers/counter.js";
const counterRouter = express.Router();
counterRouter.get("/counter", getCounters);
counterRouter.post("/counter", createCounter);
export default counterRouter;
