import fs from 'fs';

// const txt=fs.readFileSync('demo.txt','utf-8')
const t1=performance.now();
console.log(t1);
fs.readFile('demo.txt','utf-8',(err,txt)=>{
    try {
        console.log(txt);
    } catch (err) {
        console.log(err,"i am mohit kumar")
    }
})

// console.log(txt)