import express from "express";
import {
    createProduct,
    deleteProduct,
    getAllProductsSSR,
    getAllProducts,
    getProduct,
    replaceProduct,
    updateProduct,
    getAddForm
  } from "../controllers/Products.js";
  const Routes=express.Router();
Routes.get("/ssr", getAllProductsSSR);
Routes.get("/add", getAddForm);

//Create POST /products     C R U D
Routes.post("/products", createProduct);

// READ GET /products

Routes.get("/products/", getAllProducts);

// Read GET /products/:id
Routes.get("/products/:id", getProduct);

// Update PUT /products/:id
Routes.put("/products/:id", replaceProduct);
// Update PATCH /products/:id
Routes.patch("/products/:id", updateProduct);
// Delete DELETE /products/:id
Routes.delete("/products/:id", deleteProduct);


export default Routes;