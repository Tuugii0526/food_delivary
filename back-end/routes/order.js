import express from "express";
import { createOrder, getOrders } from "../controllers/order.js";
const orderRouter = express.Router();
orderRouter.get("/order", getOrders);
orderRouter.post("/order", createOrder);
export default orderRouter;

