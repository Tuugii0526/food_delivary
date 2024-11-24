import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import { connectToMongodb } from "./connectDb.js";
import bodyParser from "body-parser";
import multer from "multer";
const app = express();
app.use(cors());
const upload = multer();
const jsonParser = bodyParser.json();
export const mongoDatabase = await connectToMongodb();
const PORT = 1234;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
  secure: true,
});
app.get("/", (req, res) => {
  return res.json({
    success: "Yes you have successfully gotten a response from the server",
  });
});
app.get("/exp", (req, res) => {
  return res.json({
    success: "Yes iam working",
  });
});
app.get("/cloudinary", (req, res) => {
  const query = req.query;
  if (query.id) {
    const optimizedUrl = cloudinary.url(query.id, {
      fetch_format: "auto",
      quality: "auto",
    });
    return res.status(200).json({
      response: optimizedUrl,
    });
  }
  return res.status(404).json({
    response: "Image not found",
  });
});

app.post("/food", upload.single("image"), async (req, res, next) => {
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
    const collection = mongoDatabase.collection("food");
    await collection.insertOne({
      foodName: foodName,
      ingredient: foodIngredientArray,
      image: url,
      categoryId: foodCategory,
      initialPrice: Number(foodPrice),
      discountPercent: Number(sale),
    });
    return res.redirect(`${process.env.FRONTEND_URL}`);
  } catch (error) {
    console.log(`error:${error}`);
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }
});

app.get("/category", async (req, res, next) => {
  try {
    const categoryCollection = mongoDatabase.collection("category");
    const categories = await categoryCollection.find({}).toArray();
    res.status(200).json({
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});
app.post("/category", upload.array(), async (req, res) => {
  try {
    const { category } = req.body;
    const categoryCollection = mongoDatabase.collection("category");
    await categoryCollection.insertOne({
      categoryName: category,
    });
    return res.redirect(
      `${process.env.FRONTEND_URL}?isCategoryCreated=${category}`
    );
  } catch (error) {
    console.log("error:", error);
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }
});

app.get("/data", async (req, res) => {
  try {
    const dataCollection = mongoDatabase.collection("food");
    const allDocuments = await dataCollection.find().limit(10).toArray();
    return res.json({
      success: true,
      data: allDocuments,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: `${error}`,
    });
  }
});
app.post("/data", async (req, res) => {
  try {
  } catch (error) {}
});
app.listen(PORT, () => {
  console.log(`Service started working `);
});
