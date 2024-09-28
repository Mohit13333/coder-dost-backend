import express from "express";
import fs from "fs";
import createProduct from "./MVC/createproduct.js";
const app = express();

const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const products = data.products;

// bodyparser
app.use(express.json());

// API Endpoint   or server route

// products

// API ROOT , base URL, example - google.com/api/v2/

//Create POST /products     C R U D
app.post("/products",createProduct );

// READ GET /products

app.get("/products/", function (req, res) {
  res.send(products);
});
// Read GET /products/:id
app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// Update PUT /products/:id
app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});
// Update PATCH /products/:id
app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});
// Delete DELETE /products/:id
app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});

//browser supports only get request
