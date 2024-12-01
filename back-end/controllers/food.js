import { v2 as cloudinary } from "cloudinary";
import { Food } from "../model/index.js";
import "dotenv/config";
import { getAllBlogsByCategories } from "../lib/getAllBlogs.js";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
  secure: true,
});
const getFoods = async (req, res, next) => {
  const { categoryQuery } = req.query;
  try {
    if (!categoryQuery) {
      const foods = await getAllBlogsByCategories();
      return res.json({
        success: true,
        data: foods,
      });
    }
    const categoryFoods = await Food.find({ categoryId: categoryQuery });
    return res.json({
      success: true,
      data: categoryFoods,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `${error}`,
    });
  }
};
const createFood = async (req, res, next) => {
  try {
    const { foodName, foodCategory, foodIngredient, foodPrice, sale } =
      req.body;
    const { buffer, originalname } = req.file;
    if (
      !(
        foodName &&
        foodCategory &&
        foodIngredient &&
        foodPrice &&
        sale >= 0 &&
        buffer
      )
    ) {
      return res.json({
        success: false,
      });
    }
    const public_id = originalname.match(/\w+/)[0];
    const { url } = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            fetch_format: "auto",
            quality: "auto",
            public_id: `${public_id}`,
            tags: ["test"],
          },
          function (error, result) {
            if (error) {
              reject();
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    const foodIngredientArray = foodIngredient.split(",");
    await Food.create({
      foodName: foodName,
      ingredient: foodIngredientArray,
      image: url,
      categoryId: foodCategory,
      initialPrice: Number(foodPrice),
      discountPercent: Number(sale),
    });
    return res.redirect(`${process.env.FRONTEND_URL}`);
  } catch (error) {
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }
};
const deleteFood = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await Food.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};
export { createFood, getFoods, deleteFood };
