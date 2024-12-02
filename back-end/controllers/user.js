import { User } from "../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
    if (!foundUser) {
      return res.status(401).json({
        message: "You don't have an account",
      });
    }
    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Your password is incorrect",
      });
    }
    const exp = Math.floor(Date.now() / 1000) + 30 * 60;
    const token = jwt.sign(
      {
        userId: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        exp: exp,
      },
      process.env.SESSION_SECRET
    );
    return res.status(200).json({ token, exp });
  } catch (error) {
    return res.status(500).json({
      message: `${error}`,
    });
  }
};
export { createUser, login };
