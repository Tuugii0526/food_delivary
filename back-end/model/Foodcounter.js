import mongoose from "mongoose";
const foodCountSchema = new mongoose.Schema({
  food: {
    _id: {
      type: String,
    },
    foodName: {
      type: String,
      required: true,
    },
    foodNumber: {
      type: Number,
    },
    ingredient: {
      type: [String],
      requiered: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    initialPrice: {
      type: Number,
      required: true,
    },
    discountPercent: {
      type: Number,
      required: true,
    },
  },
  howMany: {
    type: Number,
    required: true,
  },
  howMuch: {
    type: Number,
    required: true,
  },
  foodId: {
    type: String,
  },
});
const Foodcounter = mongoose.model("Foodcounter", foodCountSchema);
export default Foodcounter;
