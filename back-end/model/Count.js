import mongoose from "mongoose";
const countSchema = new mongoose.Schema({
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  howMany: {
    type: Number,
    required: true,
  },
  howMuch: {
    type: Number,
    required: true,
  },
});
const Count = mongoose.model("Count", countSchema);
export default Count;
