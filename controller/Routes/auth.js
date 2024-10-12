import { createUser, login } from "../controllers/auth.js";
import express from "express";
const Routes=express.Router();

Routes.post("/Signup",createUser);
Routes.post("/login",login);

export default Routes;