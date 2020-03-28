var fs = require('fs');
var path = require('path');
var dirPath = process.cwd();  //directory path
var fileType = '.'+process.argv[2]; //file extension
var files = [];
console.log("current working directory:", dirPath)
console.log("command arg - extension:", fileType)
fs.readdir(dirPath, function(err,list){
    if(err) throw err;
    for(var i=0; i<list.length; i++)
    {
        if(path.extname(list[i])===fileType)
        {
            console.log(list[i]); //print the file
            files.push(list[i]); //store the file name into the array files
        }
    }
});