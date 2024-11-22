import { MongoClient } from "mongodb";
import "dotenv/config";
const connectionString = process.env.MONGODB_URL || "";
export const connectToMongodb = async () => {
  const client = new MongoClient(connectionString);
  try {
    const conn = await client.connect();
    let db = conn.db("food_delivary");
    return db;
  } catch (error) {
    console.log(`Mongodb error:${error}`);
  }
};
