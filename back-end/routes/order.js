import express from "express";
import { createOrder, getOrders, updateProcess } from "../controllers/order.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
import multer from "multer";
const upload = multer();
const orderRouter = express.Router();
orderRouter.use(authenticateToken);
orderRouter.get("/order", getOrders);
orderRouter.post("/order", upload.array(), createOrder);
orderRouter.put("/order", updateProcess);
// orderRouter.
export default orderRouter;
