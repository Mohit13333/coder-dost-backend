import Product from "../model/product.model.js";
// import {model} from "mongoose"
// import fs from "fs"
import ejs from "ejs"
import path from "path";
// const Products1 = model.Product;
// import index from "../pages/index.ejs"

// view
const __dirname = path.dirname('pages');
const getAllProductsSSR = async (req, res) => {
  try {
      const Products = await Product.find();  // Fetch all Products
      console.log(Products);

      if (!Products || Products.length === 0) {
          // If no Products are found, handle the error accordingly
          return res.status(404).send("No Products found");
      }

      // Use __dirname to build the path to the EJS file correctly
      ejs.renderFile(path.join(__dirname, "/pages/index.ejs"), { Products: Products}, function(err, str) {
          if (err) {
              console.error("Error rendering EJS:", err);
              return res.status(500).send("Error rendering the page");
          }
          res.send(str);
      });
  } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Server error");
  }
};

const getAddForm = async(req, res) => {
  ejs.renderFile(path.join(__dirname, "/pages/add.ejs"), function(err, str) {
    if (err) {
        console.error("Error rendering EJS:", err);
        return res.status(500).send("Error rendering the page");
    }
    res.send(str);
});
};

const createProduct =
async (req, res) => {
  const product = new Product(req.body);
  const savedProduct=await product.save();
  console.log(savedProduct);
  res.status(201).send(savedProduct);
};

const getAllProducts = async(req, res) => {
  const getProducts=await Product.find();
  console.log(getProducts);
  res.json(getProducts);
};

const getProduct = async (req, res) => {
      const id = req.params.id;
      const product = await Product.findById(id); // Ensure you are returning only the document
      res.status(200).json(product);
};
const replaceProduct = async (req, res) => {
  const id = req.params.id;
  const productIndex = await Product.findOneAndReplace({_id:id},req.body,{new:true}); // it _id:id written because it is find one
  res.status(201).json(productIndex);
};
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productIndex =await Product.findByIdAndUpdate(id,req.body);
  res.status(201).json(productIndex);
};
const deleteProduct = async(req, res) => {
  const id = req.params.id;
  const productIndex = await Product.findByIdAndDelete(id)
  res.status(201).json(productIndex);
};

export {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  getAllProductsSSR,
  getAddForm
};
