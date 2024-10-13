import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
} from "../controllers/Products.js";
import {
  getAllUsers,
  getUser,
  replaceUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import auth from "../jwt/jwt.js";
import { createUser } from "../controllers/auth.js";
const Routes = express.Router();

Routes.get("/users/", auth,getAllUsers);


// Read GET /users/:id
Routes.get("/users/:id", auth, getUser);

// Update PUT /users/:id
Routes.put("/users/:id", auth, replaceUser);
// Update PATCH /users/:id
Routes.patch("/users/:id", auth, updateUser);
// Delete DELETE /users/:id
Routes.delete("/users/:id", auth, deleteUser);
//Create POST /users     C R U D
Routes.post("/products", auth, createProduct);
// Update PUT /users/:id
Routes.put("/users/:id", auth, replaceUser);
// Update PATCH /users/:id
Routes.patch("/users/:id", auth, updateUser);
// Delete DELETE /users/:id
Routes.delete("/users/:id", auth, deleteUser);
//Create POST /users     C R U D
Routes.post("/users", auth, createProduct);


// READ GET /products

Routes.get("/products", getAllProducts);

// Read GET /products/:id
Routes.get("/products/:id", getProduct);

// Update PUT /products/:id
Routes.put("/products/:id", replaceProduct);
// Update PATCH /products/:id
Routes.patch("/products/:id", updateProduct);
// Delete DELETE /products/:id
Routes.delete("/products/:id", deleteProduct);

export default Routes;
