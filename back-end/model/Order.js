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
  foods: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    isPaid: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date(),
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
