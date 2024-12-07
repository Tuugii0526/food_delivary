import { Order, Counter, Foodcounter } from "../model/index.js";
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("foodCounts");
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
const createOrder = async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "order" },
      {
        $inc: { number: 1 },
      },
      {
        new: false,
      }
    );
    let {
      district,
      neighborhood,
      apartment,
      addition,
      phone,
      byCard,
      byCash,
      cart,
      totalPrice,
    } = req.body;
    const { userId, name } = req.user;
    byCash = byCash ? "on" : "off";
    byCard = byCard ? "on" : "off";
    const parsedCart = JSON.parse(cart);
    const insertedFoodCounters = await Foodcounter.insertMany(parsedCart);
    const insertedFoodCountersIds = insertedFoodCounters.map((doc) => doc._id);
    const savedOrder = await Order.create({
      userId: userId,
      userName: name,
      orderNumber: counter.number,
      foodCounts: insertedFoodCountersIds,
      totalPrice: Number(totalPrice),
      district: district,
      khoroo: neighborhood,
      apartment: apartment,
      phoneNumber: phone,
      addressDetail: addition,
      byCash: byCash,
      byCard: byCard,
    });
    return res.status(200).json({ success: true, data: savedOrder });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
const updateProcess = async (req, res) => {
  const { pay, delivery, id } = req.query;
  console.log("pay is :", pay);
  console.log("id is:", id);
  console.log("Iam working");
  console.log("query is:", req.query);
  if (pay) {
    try {
      const updated = await Order.findByIdAndUpdate(
        id,
        {
          $set: { isPaid: pay },
        },
        {
          new: true,
        }
      );
      return res.status(201).json({ updated });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  if (delivery) {
    try {
      const updated = await Counter.findByIdAndUpdate(
        id,
        {
          deliveryStatus: delivery,
        },
        {
          new: true,
        }
      );
      return res.status(201).json({ updated });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};
export { getOrders, createOrder, updateProcess };
