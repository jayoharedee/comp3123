const fs = require('fs')

const path = require('path');

const dicrectory = __dirname;

fs.readdir(dicrectory, (err, files) => {
    if (err) throw error;
    for (let file of files){
        if(file != 'delete.js' && file != 'add.js'){
        fs.unlink(path.join(dicrectory, file), err => {
            if (err) throw err;
            console.log("Deleted file ... "+ file);
        })}
    }
})


