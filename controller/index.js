import express from "express";
import morgan from "morgan";
import Routes from "./Routes/Routes.js"
// import fs from "fs";
// const productRouter=express.Router();

const app = express();

// const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
// const products = data.products;

// bodyparser
app.use(express.json());
app.use(morgan('default'));
app.use("/api",Routes)


app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});

//browser supports only get request
