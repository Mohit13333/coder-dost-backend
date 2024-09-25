import express from "express";
import fs from "fs";
import morgan from "morgan";
const app = express();

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const products = data.products;

// bodyparser
app.use(express.json());
// app.use(express.urlencoded);
// app.use(morgan("default"));
app.use(express.static("public"));
// app.use(morgan);

// application level middleware
app.use((req, res, next) => {
  console.log(
    req.get("User-Agent"),
    req.method,
    req.ip,
    req.hostname,
    req.ips,
    new Date()
  );
  next();
});
// const auth=(req,res,next)=>{
//     console.log(req.query)
//     if (req.query.password==='123') {
//         next();
//     }else{
//         res.status(401).send("Something went wrong")
//     }
// };
// app.use(auth);
const auth = (req, res, next) => {
//   console.log(req.body);
//   if (req.body.password == "123") {
//     next();
//   } else {
//     res.status(401).send("Something went wrong");
//   }
next();
};
app.get("/product/:id", function (req, res) {
    console.log(req.params);
  res.send(products);
});

app.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});
