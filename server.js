// dns.js
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config({quiet: true});

import chalk from "chalk";
import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

// creating server
connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`server start     
http://localhost:${PORT}`);
  })
)
