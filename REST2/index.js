import express from 'express';
import fs from 'fs';
const server = express();

//bodyParser
server.use(express.json());

const data = JSON.parse(fs.readFileSync("quote.json", "utf8"));
const quotes = data.quotes;

// API ROOT , base URL, example - google.com/api/v2/

//Create POST /quotes     C R U D
server.post('/quotes', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  });
  
  
  
  // Read GET /quotes
  server.get('/quotes', (req, res) => {
    res.json(quotes);
  });
  
  // Read GET /quotes/:id
  server.get('/quotes/:id', (req, res) => {
    const id = +req.params.id;
    const quote = quotes.find(p=>p.id===id)
    res.json(quote);
  });
  
  // Update PUT /quotes/:id
  server.put('/quotes/:id', (req, res) => {
    const id = +req.params.id;
    const quoteIndex = quotes.findIndex(p=>p.id===id)
    quotes.splice(quoteIndex,1,{...req.body, id:id})
    res.status(201).json();
  });
  // Update PATCH /quotes/:id
  server.patch('/quotes/:id', (req, res) => {
    const id = +req.params.id;
    const quoteIndex = quotes.findIndex(p=>p.id===id)
    const quote = quotes[quoteIndex];
    quotes.splice(quoteIndex,1,{...quote,...req.body})
    res.status(201).json();
  });
  // Delete DELETE /quotes/:id
  server.delete('/quotes/:id', (req, res) => {
    const id = +req.params.id;
    const quoteIndex = quotes.findIndex(p=>p.id===id)
    const quote = quotes[quoteIndex];
    quotes.splice(quoteIndex,1)
    res.status(201).json(quote);
  });
  
server.listen(8000,()=>{
    console.log('server is running at http://localhost:8000')
})