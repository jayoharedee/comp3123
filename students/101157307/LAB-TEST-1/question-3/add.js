const fs = require('fs');
const path = require('path');

const logsDirectory = __dirname +"/logs"

if (!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for(let i=0; i<10; i++){
    let filename = "log"+i+".txt";
    console.log(filename);
    fs.writeFile(filename, "some generic text", (err)=> {if(err) throw(err);})
}
