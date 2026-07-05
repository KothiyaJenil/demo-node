// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import morgan from 'morgan';

// variables and middleware
dotenv.config({ quiet: true });
const app = express();
app.use(express.json()) // parse and work with json data
app.use(morgan('dev')); // HTTP req log 
const PORT = process.env.PORT || 3000;



// creating server
connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`server start
http://localhost:${PORT}`);
  })
)
