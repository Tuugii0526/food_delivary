import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["ADMIN", "USER"],
      message: "{VALUE} is not a valid role",
    },
    default: "USER",
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
