import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import { connectToMongodb } from "./connectDb.js";
const app = express();
const mongoDatabase = await connectToMongodb();
app.use(express.json());
app.use(cors());
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

app.post("/cloudinary", async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload("./assets/oreoShake.png", {
      public_id: "1",
    });
    return res.status(201).json({
      response: result,
    });
  } catch (error) {
    return res.status(500).json({
      response: `${error}`,
    });
  }
});
app.get("/data", async (req, res) => {
  try {
    console.log("Iam working");
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
