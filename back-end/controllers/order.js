import { Order } from "../model/index.js";
let count = 1;
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      userId: "67469436c541b5bcb0ca105b",
      orderNumber: count++,
      foods: [],
      totalPrice: 300,
      district: "district",
      khoroo: "khoroo",
      apartment: "apartment",
    });
    return res.status(200).json({ success: true, data: order });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
export { getOrders, createOrder };
