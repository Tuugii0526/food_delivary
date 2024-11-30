import { User } from "../model/index.js";
import bcrypt from "bcrypt";
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${messgae}`,
    });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    res.cookie("hobby", "meditating", {
      httpOnly: true,
      // secure: true,
      maxAge: 3600000, // 1 hour in milliseconds
    });
    if (userExists) {
      console.log("user exits:", userExists);
      return res.status(409).json({
        success: false,
        message: "User already exits",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
export { getUsers, createUser };
