const fs = require("fs");
const p = require("path");

if(!fs.existsSync('Logs')){
    fs.mkdirSync('Logs');
    process.chdir('Logs')
    console.log('Current directory: ' + process.cwd())

    for(var i=0;i<10;i++){
        fs.writeFileSync(`log${i}.txt`,`test${i}`)
    }

    fs.readdirSync(process.cwd()).forEach(file=>{
        console.log(file)
    })
}

