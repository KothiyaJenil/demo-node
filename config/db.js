import dotenv from "dotenv";
dotenv.config({quiet: true});


import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI)

export const connectDB = async () => {
  try {

    await mongoose.connect(URI);
    console.log("database connected");
  } catch (error) {
    console.error(`database error => \n${error}`);
    process.exit(1);
  }
};


export const DBinstance = async () => {
  await client.connect();
  log("MongoDB connected");
  const db = client.db("CodeAnonymous");
  return db;
};
