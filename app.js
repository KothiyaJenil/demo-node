import express from "express";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const app = express();


app.use(express.json()); // parse and work with json data

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(process.env.PORT || 3000, () => {
  console.log(`server start
http://localhost:${process.env.PORT || 3000}`);
});
