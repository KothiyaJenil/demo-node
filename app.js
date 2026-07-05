import express from "express";
import mongoose from "mongoose";
import { DBinstance } from "./config/db.js";


export const app = express();

app.use(express.json()); // parse and work with json data


app.get("/", async (req, res) => {
  const db = await DBinstance();
  const user = db.collection("admins");
  const data = await user.find().toArray();
  res.status(201).json({ data })
});
