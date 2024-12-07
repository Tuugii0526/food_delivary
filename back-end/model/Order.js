import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },

  orderNumber: {
    type: Number,
    required: true,
  },
  foodCounts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Foodcounter" }],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
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
  addressDetail: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  byCash: {
    type: String,
    enum: ["off", "on"],
    required: true,
  },
  byCard: {
    type: String,
    enum: ["off", "on"],
    required: true,
  },
});
const Order = mongoose.model("Order", orderSchema);
export default Order;
