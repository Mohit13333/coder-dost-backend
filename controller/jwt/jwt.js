import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";


const __dirname = path.dirname('conroller');
const publicekey=fs.readFileSync(path.join(__dirname,"public.key"),"utf-8");
const auth = (req, res, next) => {
  try {
    const token = req.get("authorization").split("Bearer ")[1];
    console.log(token);
    let decoded = jwt.verify(token, publicekey);
    console.log(decoded);
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
};

export default auth;
