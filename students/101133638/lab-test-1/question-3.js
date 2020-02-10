let fs = require("fs");
let path = require("path");

let currentDir = process.cwd();
let logDir = process.cwd() + "/Logs";

// Create Log files
// create a Logs directory, if it does not exist
// change the current process to the new Logs directory
// create 10 log files and write some text into the file
// output the files names to console


if (fs.existsSync(logDir)) {
    process.chdir('Logs');
    for (var index = 0; index < 10; index++) {
        console.log(('deleted files...log' + [index] + ".txt"));
        fs.unlinkSync('log' + [index] + ".txt");
    }
    process.chdir('../');
    fs.rmdirSync('Logs');
} else {
    fs.mkdirSync("Logs");
    process.chdir('Logs');
    for (var index = 0; index < 10; index++) {
        console.log(('log' + [index] + ".txt"));
        fs.writeFileSync('log' + [index] + ".txt", "Write operation complete");
    }
}