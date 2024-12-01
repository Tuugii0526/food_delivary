import { User } from "../model/index.js";
const getUsers = async (req, res) => {
  if (req.user.role == "USER") {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({
      message: `${messgae}`,
    });
  }
};
const getSpecificUser = async (req, res) => {
  return res.json(req.user);
};
export { getSpecificUser, getUsers };
