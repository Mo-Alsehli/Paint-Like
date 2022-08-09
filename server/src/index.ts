import express from "express";
import dotenv from "dotenv";
import connectDB from "../db/connect";
import user_routes from "./handlers/users";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

user_routes(app);

const start = async () => {
  try {
    const connString = process.env.MONGO_URL?.toString();
    await connectDB(connString as string);
    app.listen(port, function () {
      console.log(`Server Staring On Port: ${port}...`);
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
start();
