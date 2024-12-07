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
    const created = await Category.create({
      categoryName: category,
    });
    if (created) {
      return res.status(201).json({ created });
    } else {
      return res.status(404).json({ error: `No such category  exists` });
    }
  } catch (error) {
    return res.status(500).json({ error: `${error}` });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedCategory = await Category.findByIdAndDelete(id);
    console.log(deletedCategory);
    if (deletedCategory) {
      return res.status(200).json({ deletedCategory });
    } else {
      return res.status(404).json({ error: "Item not fount" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const editCategory = async (req, res) => {
  try {
    const { id } = req.query;
    const { categoryName } = req.body;
    console.log("category name:", categoryName);
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        $set: { categoryName: categoryName },
      },
      { new: true }
    );
    if (updatedCategory) {
      return res.status(200).json({ updatedCategory });
    } else {
      return res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { createCategory, getCategories, deleteCategory, editCategory };
