import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
} from "../controllers/Products.js";
// import {
//   getAllUsers,
//   getUser,
//   replaceUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/user.js";
// import auth from "../jwt/jwt.js";
// import { createUser } from "../controllers/auth.js";
const Routes = express.Router();

// Routes.get("/users/", auth, getAllUsers);

// // Read GET /users/:id
// Routes.get("/users/:id", auth, getUser);

// // Update PUT /users/:id
// Routes.put("/users/:id", auth, replaceUser);
// // Update PATCH /users/:id
// Routes.patch("/users/:id", auth, updateUser);
// // Delete DELETE /users/:id
// Routes.delete("/users/:id", auth, deleteUser);
// //Create POST /users     C R U D
// Routes.post("/users", auth, createProduct);

// READ GET /products

Routes.get("/products/", getAllProducts);

// Read GET /products/:id
Routes.get("/products/:id", auth, getProduct);

// Update PUT /products/:id
Routes.put("/products/:id", auth, replaceProduct);
// Update PATCH /products/:id
Routes.patch("/products/:id", auth, updateProduct);
// Delete DELETE /products/:id
Routes.delete("/products/:id", auth, deleteProduct);

export default Routes;
