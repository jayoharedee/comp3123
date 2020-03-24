const fs = require('fs')
const path = require('path')

const directoryPath = __dirname;

var extension ="."+ process.argv[2];


fs.readdir(directoryPath, function (err, files) {
    console.log(directoryPath)
    console.log(`command arg - extention: ${extension}`)
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    files.forEach(function (file) {
        if(path.extname(file)==extension) {
            console.log(file)
        }
    });
});