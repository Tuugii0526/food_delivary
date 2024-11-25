import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
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
});
const Food = mongoose.model("Food", foodSchema);
export default Food;