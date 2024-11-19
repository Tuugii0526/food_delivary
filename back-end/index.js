import express, { response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
const app = express();
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
  res.json({
    success: "Yes you have successfully gotten a response from the server",
  });
});
app.get("/exp", (req, res) => {
  res.json({
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

app.listen(PORT, () => {
  console.log(
    `##1  Service started working. From this branch nothing is merged into check.
     ##2  How to merge from back-end to check ?`
  );
});
