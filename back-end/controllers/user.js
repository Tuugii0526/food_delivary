import { User } from "../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secretKey = process.env.SESSION_SECRET;
export const key = new TextEncoder().encode(secretKey);
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
    if (userExists) {
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
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({
      email: email,
    });
    console.log("foundUser:", foundUser);
    if (!foundUser) {
      return res.status(401).json({
        message: "Authentication failed",
      });
    }
    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Authentication failed",
      });
    }
    const token = jwt.sign(
      { userId: foundUser._id, role: foundUser.role },
      key,
      {
        expiresIn: "1800s",
      }
    );
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
export { getUsers, createUser, login };
