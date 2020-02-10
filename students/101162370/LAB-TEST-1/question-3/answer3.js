const fs = require("fs");
const process = require("process")

let cwd = process.cwd();

if(fs.existsSync(cwd+"/Logs")){
    process.chdir("Logs")

    for(let x=0; x<10; x++){
        fs.unlinkSync("log${x}.txt",(error)=>{
            console.log(error);
        })
        console.log("delete files...log${x}.txt");
    }
    process.chdir("..")
    fs.rmdirSync("Logs");
}
else {

    fs.mkdirSync("Logs");
    process.chdir("Logs");
    
    for(let x=0; x<10; x++){
        fs.writeFileSync(`log${x}.txt`,`writing to log #${x}`, (error) => {
            console.log(error);
        })
        console.log(`log${x}.txt has been created`)
    }
}