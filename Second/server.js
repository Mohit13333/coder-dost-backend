import express from 'express';
// import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config({
    // path:"./.env"
})
console.log("hello world")
const app=express();
app.get("/",(req,res)=>{
    res.send("Mohit Kumar youtube")
})
console.log("hello world")
app.listen(process.env.PORT,()=>{
  console.log(`app listenning at http://localhost:${process.env.PORT}`)
});