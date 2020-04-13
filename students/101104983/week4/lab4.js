// Exercise 1: ●	Write a script that lists files in current directory, filtered by a given extension from the command line.
	// Use the file and path module
	// User the process object to get the current directory and command line args
	// Use fs.readdir(path[, options], callback) to asynchronously read the contents of the file directory and output the file names


let fs = require("fs");
let p = require("path");

var currentPath = process.cwd();
console.log("The current directory is "+ currentPath)

let fName = p.basename(process.argv[1])
let eName = p.extname(fName)

console.log("The file name is: "+fName +" and the extension name is "+ eName)

fs.readdir(currentPath, (err,files) =>{
    if (err) throw err
    files.filter((file) => {
        p.extname(file) == eName
    }).forEach((file)=> {
        console.log(file)
    })
})

// Exercise 2: ●	Using the process object write a script that logs the following =>https://nodejs.org/api/process.html

// OS platform, processor architecture, version of NodeJS, version of V8, version of LibUV, PID, title and working directory

console.log("===== SYSTEM INFO =====")
console.log(`Platform:  ${process.platform}`)
console.log(`Architecture:  ${process.arch}\n`)
console.log("===== NodeJS =====")
console.log(`node version: ${process.versions['node']}`)
console.log(`v8 version: ${process.versions['v8']}`)
console.log(`libuv version: ${process.versions['uv']}\n`)
console.log(`===== Process =====`)
console.log(`pid: ${process.pid}`)
console.log(`title: ${process.title}`)
console.log(`current directory: ${process.cwd()}`)

// Exercise 3: ●	Using following setInterval code to run an infinite loop on the process that runs it.  Add event listeners on the process exit and signal interrupt events and log the process running uptime.  Use Ctrl+X Ctrl+C to kill the current process and trigger the events.

setInterval(()=> null, 1000);

process.on('exit', () =>{
    console.log(`process uptime on exit ${process.uptime()}`);
    process.exit();
});

process.on('SIGINT', () => {
    console.log("signal interrupted...");
    console.log(`process uptime on signal interrupt ${process.uptime()}`);
    process.emit("exit");
});

// Exercise 4 : ●	Given the following compute.js file, create a script that will use the child process module and fork a child process that will execute the compute script and do the following:
// send a message to the child process to start the calculation
// create an event listener to receive the message sent from child process and log resul

const { fork } = require('child_process');

const forked = fork('compute.js');

forked.on('message', (msg) => {
    console.log(`Long computation result: ${msg}`);
    forked.exit();
});

forked.send('start');

