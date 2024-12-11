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
    type: String,
    required: false,
  }, //in sign up , this will not be gotten, but after the user logged in, user will update it
  avatar: {
    type: String,
    default: "",
  },
  //in sign up , this will not be gotten, but after the user logged in, user will update it
  role: {
    type: String,
    enum: {
      values: ["ADMIN", "USER"],
      message: "{VALUE} is not a valid role",
    },
    default: "USER",
  },
});
const User = mongoose.model("User", userSchema);
export default User;
