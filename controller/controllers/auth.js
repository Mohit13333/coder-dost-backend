import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
const _dirname = path.dirname("conroller");
const privatekey = fs.readFileSync(path.join(_dirname, "private.key"), "utf-8");
// Your existing createUser function
const createUser = (req, res) => {
  const user = new User(req.body);
  let token = jwt.sign({ email: req.body.email }, privatekey, {
    algorithm: "RS256",
  });
  const hash = bcrypt.hashSync(req.body.password, 10);
  user.token = token;
  user.password = hash;
  user.save(req.body);
  console.log(user);
  // users.push(req.body); // Now 'users' is correctly recognized as an array
  res.status(201).json({token});
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, user.password);
    if (isAuth) {
      let token = jwt.sign({ email: req.body.email }, privatekey, {
        algorithm: "RS256",
      });
      try {
        user.token = token;
        user.save();
        res.status(200).json({token});
      } catch (error) {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
export { createUser, login };
