import http from "http";

const data = { age: 5 };
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("Hello Server Started");
  res.setHeader("Content-Type", "application/json");
  // res.setHeader("dummy","Dummyvalue");
  // res.end(data.toString());
  res.end(JSON.stringify(data));
});

server.listen(8000);
