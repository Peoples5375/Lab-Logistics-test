const http = require('http');
const port = 3000;
const fs = require('fs');
var chokidar = require('chokidar');

//this is just some though process. ignore this file..

//I added a .env file. im not sure if its in the right spot within the folder structure.  
//This can read a file.. the readme.md file inside of file watching..
//If i have it set to watchfile then it can watch the file. im unsure if it can watch the whole directory. 
const data = fs.readFileSync('../file_watching/README.md');
console.log(data.toString());


//i can use chokidar to watch a file.. im unsure on how to keep it running unless it runs with the whole server. 
var watcher = chokidar.watch('../file_watching', {ignored: /^\./, persistent: true});

const log = console.log.bind(console);

//did i even get the right directory?
// watcher 
//     .on('change', '../file_watching', path => log(`File ${path} has been changed`))


