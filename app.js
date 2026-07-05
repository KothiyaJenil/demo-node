import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DBinstance } from "./config/db";

dotenv.config({ quiet: true });

const app = express();


app.use(express.json()); // parse and work with json data




app.get("/", async (req, res) => {
  const db = await DBinstance();
  const user = db.collection("admins");
  const data = await user.find().toArray();
  res.status(201).json({ data })
});


app.listen(process.env.PORT || 3000, () => {
  console.log(`server start
http://localhost:${process.env.PORT || 3000}`);
});
