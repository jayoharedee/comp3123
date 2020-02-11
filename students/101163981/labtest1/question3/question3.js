const fs = require('fs');
const path = require('path');
const pathToDir = path.join(__dirname, '/Logs');

// 1. Remove Log files

// Remove all files from Log directory, if exists
fs.readdir(dir, (err, files) => {
    if(err) throw err;

    for(const file of files) {
        // Output the file names to delete
        console.log('delete file...', file)
        fs.unlink(path.join(dir, file), err => {
            if(err) throw err;
        })
    }
})
// remove the Logs directory
fs.rmdir(pathToDir, function (err) {
    if (err) {
        throw err
    } else {
        console.log('Successfully removed the empty directory!');
    }
})    


// 2. Create Log files

// Create a Logs directory
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// Change process to new Logs directory
try {
    process.chdir('/Logs');
    console.log('New directory: ' + process.cwd());
}
catch (err) {
    console.log('chdir: ' + err);
}

// Create 10 log files and write some text into the file
for(var i = 0; i < 10; i++){
    fs.writeFile(`logfile_${i}.txt`,'This is some sample text', function(err){
        if(err) throw err;

        // Output the file names to console
        console.log(`logfile_${i}.txt was created successfully`)
    })
}












