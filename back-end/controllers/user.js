import { User } from "../model/index.js";
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
    const createdUser = await User.create({
      name: "Tuguldur",
      email: "namjildorjtuguldur1234@gmail.com",
      password: "happyCode",
      phoneNumber: "90914944",
    });
    return res.status(200).json({
      success: true,
      data: createUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
export { getUsers, createUser };
