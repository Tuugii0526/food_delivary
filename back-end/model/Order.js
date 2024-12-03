import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodCounts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Count" }],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    isPaid: {
      type: String,
      enum: {
        values: ["PAID", "NOT_PAID"],
        message: "invalid pay status",
      },
      default: "NOT_PAID",
    },
    deliveryStatus: {
      type: String,
      enum: {
        values: ["PROGRESS", "DELIVERED", "WAITING", "ACTIVE"],
        message: "invalid delivery status",
      },
      default: "ACTIVE",
    },
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});
const Order = mongoose.model("Order", orderSchema);
export default Order;
