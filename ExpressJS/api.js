import express from 'express';
import fs from 'fs';
const app=express();

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const products = data.products;


// API Endpoint   or server route
app.get('/', function(req, res){
        res.send(products);
});
// app.get('/',(req, res)=>{
//     res.json({type:'GET'})
// })
app.post('/',(req, res)=>{
    res.json({type:'POST'})
})
app.put('/',(req, res)=>{
    res.json({type:'PUT'})
})
app.delete('/',(req, res)=>{
    res.json({type:'DELETE'})
})
app.patch('/',(req, res)=>{
    res.json({type:'PATCH'})
})

app.listen(8000,()=>{
    console.log('Server is running at http://localhost:8000')
})

//browser supports only get request