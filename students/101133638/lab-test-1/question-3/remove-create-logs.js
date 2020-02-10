
// Question 3: File Module
// Create a script that will do the following:

// 1.	Remove Log files
// - remove all the files from the Logs directory, if exists
// - output the file names to delete
// - remove the Logs directory

// 2.	Create Log files
// - create a Logs directory, if it does not exist
// - change the current process to the new Logs directory
// - create 10 log files and write some text into the file
// - output the files names to console

// Hint: use the fs module and path module, and the process current
// working directory to build directory path. It is acceptable, 
// to have a remove.js script and separate add.js script.

let fs = require("fs");
let tempDirectory = process.cwd() + "/temp";

if (fs.existsSync(tempDirectory)) {
    
    process.chdir('temp');

    for (let i = 0; i < 10; i++) {
        console.log(`deleted files...log${[i]}.txt`);
        fs.unlinkSync('log' + [i] + ".txt");
    }

    process.chdir('../');
    fs.rmdirSync('temp');

} else {

    fs.mkdirSync('temp');
    process.chdir('temp');

    for (var i = 0; i < 10; i++) {
        console.log(`log${[i]}.txt`);
        fs.writeFileSync(`log${[i]}.txt`, `File log name: log${[i]}.txt`);
    }
}