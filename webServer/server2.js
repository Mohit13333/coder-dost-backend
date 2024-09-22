import http from 'http';
import fs from 'fs';
const port=8000;
const index=fs.readFileSync('index.html', 'utf8')
const data = fs.readFileSync('data.json', 'utf8');

const server=http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'application/json');
    // res.end(data);
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
})

server.listen(port,()=>{
    console.log('Server running at http://localhost:8000')
})