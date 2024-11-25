import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foods: {
    type: [String],
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
  distric: {
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
