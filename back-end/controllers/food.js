import { v2 as cloudinary } from "cloudinary";
import { Counter, Food } from "../model/index.js";
import "dotenv/config";
import mongoose from "mongoose";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
  secure: true,
});
const getFoods = async (req, res, next) => {
  const { categoryQuery, searchQuery } = req.query;
  const fixedQuery = searchQuery !== "null" ? searchQuery?.toLowerCase() : "";
  try {
    if (!categoryQuery) {
      const groupedFood = await Food.aggregate([
        {
          $search: {
            index: "default", // The name of your Atlas Search index
            regex: {
              query: `.*${fixedQuery}.*`,
              path: "foodName", // The field you indexed with the keyword analyzer
            },
          },
        },
        {
          $group: {
            _id: {
              _id: "$categoryId",
              categoryName: "$categoryName",
            },
            CategoryFoods: { $push: "$$ROOT" },
          },
        },
      ]);
      return res.json({
        success: true,
        data: groupedFood,
      });
    }
    let categoryFoods;
    if (fixedQuery) {
      categoryFoods = await Food.aggregate([
        {
          $match: {
            categoryId: new mongoose.Types.ObjectId(categoryQuery),
            foodName: { $regex: `.*${fixedQuery}.*`, $options: "si" },
          },
        },
      ]);
    } else {
      categoryFoods = await Food.aggregate([
        {
          $match: {
            categoryId: new mongoose.Types.ObjectId(categoryQuery),
          },
        },
      ]);
    }

    return res.status(200).json({
      success: true,
      data: categoryFoods,
    });
  } catch (error) {
    return res.status(500).json({
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
    const foodIngredientArray = foodIngredient?.split(",");
    const categoryId = foodCategory?.split(";")[0];
    const categoryName = foodCategory?.split(";")[1];
    const counter = await Counter.findOneAndUpdate(
      { name: "food" },
      { $inc: { number: 1 } },
      { new: false }
    );
    await Food.create({
      foodName: foodName?.toLowerCase(),
      foodNumber: counter.number,
      ingredient: foodIngredientArray,
      image: url,
      categoryId: categoryId,
      categoryName: categoryName,
      initialPrice: Number(foodPrice),
      discountPercent: Number(sale),
    });
    return res.status(200).json({});
  } catch (error) {
    return res.status(500).json(error);
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
