import express from 'express';
import fs from 'fs';

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const products = data.products;

const server= express();
server.get('/',(req,res)=>{
    console.log(req.url);
    // res.json(products);
    // res.sendStatus(200);
    res.status(404,).send(index)
    // res.sendFile('/mohit singh/coder dost backend/ExpressJS/index.html'); it need absolute payh of file
})
server.listen(8000,()=>{
    console.log('Server is running at http://localhost:8000')
})