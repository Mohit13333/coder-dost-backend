import http from "http";
import fs from "fs";

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
// const product = data.products[0];
const products = data.products;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let index2 = index
      .replace("Iphone 15 pro", products.title)
      .replace("4.9", products.rating)
      .replace(
        "https://macmegasite.com/wp-content/uploads/2024/09/iphone16-pro-compare-hWZvWS.jpeg",
        products.thumbnail
      )
      .replace("150000", products.price);
    res.end(index2);
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/name":
      res.setHeader("Content-Type", "text/html");
      res.end("<p>I am Mohit Kumar</P>");
    // case "/product":
    //   res.setHeader("Content-Type", "text/html");
    //   const index2 = index
    //     .replace("Iphone 15 pro", product.title)
    //     .replace("4.9", product.rating)
    //     .replace("https://macmegasite.com/wp-content/uploads/2024/09/iphone16-pro-compare-hWZvWS.jpeg", product.thumbnail)
    //     .replace("150000", product.price);
    //   res.end(index2);
    //   break;
    default:
      res.writeHead(404, "Not Found");
      res.end();
  }
  console.log("Hello Server Started");
});

server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});
