import { Food } from "../model/index.js";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
  secure: true,
});
const getFoods = async (req, res, next) => {
  try {
    const foods = await Food.find();
    return res.json({
      success: true,
      data: foods,
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
export { createFood, getFoods };
