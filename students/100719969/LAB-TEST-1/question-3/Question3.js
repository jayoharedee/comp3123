const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, 'Logs');

const process = require('process');

console.log(directoryPath)

if (fs.existsSync(directoryPath)) {
    console.log('The file exists.');

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        // 2. Output the file names to delete
        files.forEach(function (file) {
            console.log(file); 
            // 1. Remove all the files from the Logs directory, if exists
            fs.unlinkSync(directoryPath + '/' + file, (err) => {
                if (err) throw err;
            });
        });
        // 3. Remove the Logs directory
        fs.rmdirSync(directoryPath, (err) => {
            if (err) throw err;
            console.log('Successfully deleted logs folder.');
        });
    });
}
else{
    //	create a Logs directory, if it does not exist
    //	change the current process to the new Logs directory
    try {
        process.chdir(directoryPath);
        console.log(`New directory: ${process.cwd()}`);
    } catch (err) {
        console.error(`chdir: ${err}`);
    }

    // 	create 10 log files and write some text into the file
    for(i = 0; i < 10; i++){
        fs.writeFile(directoryPath + '/log'+i+'.txt', (i * i - i) + "Figure it out!", (err) => {
            if (err) throw err;
        });    
    }
    // output the files names to console
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
}
