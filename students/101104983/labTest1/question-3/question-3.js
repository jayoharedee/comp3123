const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'Logs');

const process = require('process');

console.log(dirPath)

if (fs.existsSync(dirPath)) {
    console.log('file exists.');

    fs.readdir(dirPath, function (err, files) {
        if (err) {
            return console.log('Directory not accessible: ' + err);
        } 

        files.forEach(function (file) {
            console.log(file); 
           
            fs.unlinkSync(dirPath + '/' + file, (err) => {
                if (err) throw err;
            });
        });
 
        fs.rmdirSync(dirPath, (err) => {
            if (err) throw err;
            console.log('deleted Successfully.');
        });
    });
}
else{
    try {
        process.chdir(dirPath);
        console.log(`New directory: ${process.cwd()}`);
    } catch (err) {
        console.error(`chdir: ${err}`);
    }

   
    for(i = 0; i < 10; i++){
        fs.writeFile(dirPath + '/log'+i+'.txt', (i * i - i) + "Figure it out!", (err) => {
            if (err) throw err;
        });    
    }
    fs.readdir(dirPath, function (err, files) {
        if (err) {
            return console.log('Directory not accessible: ' + err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
}