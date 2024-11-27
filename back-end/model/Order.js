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
  // role: {
  //   type: String,
  //   enum: {
  //     values: ["ADMIN", "USER"],
  //     message: "{VALUE} is not a valid role",
  //   },
  //   default: "USER",
  //   required: true,
  // },
  process: {
    isPaid: {
      type: String,
      enum: {
        values: ["PAID", "NOT_PAID"],
        message: "invalid pay status",
      },
      default: "PAID",
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
