const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, './Logs');
const filename = 'Logs'

const deleteFiles = () => {
    return new Promise((resolve, reject) => {
      if (fs.exists(directoryPath)) {
        resolve(
            fs.readdir(directoryPath, function(err, files){
                files.forEach(function(file){
                    fs.unlink('${directoryPath}\\${file}', function (err){
                        if(err) throw err;
                        console.log('${file} deleted')
                    })
                })
            })
        );
      } else {
        reject('Directory does not exist!');
      }
    });
  };

const deleteDirectory = () => {
    fs.rmdir(directoryPath, function (err) {
        if (err) throw err; 
        console.log('directory deleted');
    })
}

deleteFiles()
.then(deleteDirectory)
.then(result => console.log(result))
.catch(error => console.log(error));


const mkdr = () => {
    return new Promise((resolve, reject) => {
        if(!(fs.exists(directoryPath))){
            resolve(fs.mkdir(filename))
        } 
        else{
            reject('file already exists!');
        }
    })
}