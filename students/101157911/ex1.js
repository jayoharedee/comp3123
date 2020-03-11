var path = require('path')
var fs = require('fs')

process.argv.forEach(function(val, index, array){
    console.log(index + ": " + val)
})

console.log(process.cwd())

console.log(fs.readdir(process.cwd(), (err, files) =>{
    files.forEach(file=>{
        console.log(file);
    });
}))