import http from "http";
import fs from "fs";

const index = fs.readFileSync("index.html", "utf8");
const data = fs.readFileSync("data.json", "utf8");
const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    case "/name":
      res.setHeader("Content-Type", "text/html");
      res.end("<p>I am Mohit Kumar</P>");
    default:
        res.writeHead(404,"Not Found");
        res.end()
  }
  console.log("Hello Server Started");
});

server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});
