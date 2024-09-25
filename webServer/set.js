// console.log("start");
// setTimeout(()=>{
//     console.log("stop");
// },3000);

// console.log("start");


// const { exec } = require('child_process');
// const fs = require('fs');
import {exec} from 'child_process';
import fs from 'fs'

// Define the command you want to run
const command = process.platform === 'win32' ? 'dir' : 'ls';

// Execute the command
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
    }
    
    if (stderr) {
        console.error(`Standard Error: ${stderr}`);
        return;
    }

    // Log the output
    console.log(`Command Output:\n${stdout}`);

    // Write output to a text file
    fs.writeFile('output.txt', stdout, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
            return;
        }
        console.log('Output saved to output.txt');
    });
});