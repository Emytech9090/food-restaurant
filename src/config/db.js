import mongoose from "mongoose";
import envs from "./env.js";
export const connectToBD = async () => {
  mongoose
    .connect(envs.MONGO_DB_URL, {
      appName: "Food Restaurant",
      dbName: "food-restaurant",
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Failed to connect to database:", error);
    });
};
