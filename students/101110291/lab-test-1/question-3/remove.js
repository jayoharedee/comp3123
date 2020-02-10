const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, './');

const removeDir = (dir) => {
    if (fs.existsSync(filePath)) {
        fs.readdir(`${filePath}\/${dir}`, function(err,files) {
            if(err) {
                return console.log(`No files in ${filePath}\/${dir}`);}
            files.forEach(function(file) {
                fs.unlink(`${filePath}\/${dir}\/${file}`,function(err) {
                    if(err) throw err;
                    console.log(`delete files ${filePath}\/${dir}\/${file}`);
                })})
            })
        fs.rmdirSync(`${filePath}\/${dir}`)
        console.log(`${filePath}\/${dir} deleted`)
    }   else {
            return console.log(`There is no directory named ${filePath}\/${dir}`)
    }
};

removeDir('Logs');