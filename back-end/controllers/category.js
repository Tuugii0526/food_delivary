import { Category } from "../model/index.js";
import "dotenv/config";
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    await Category.create({
      categoryName: category,
    });
    return res.redirect(
      `${process.env.FRONTEND_URL}?isCategoryCreated=${category}`
    );
  } catch (error) {
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }
};
export { createCategory, getCategories };
