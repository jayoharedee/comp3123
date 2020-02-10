const fs = require('fs');
const path = require('path');

const createScript = () =>{
    const dir = "./Log";

    //If folder does not exist create folder
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    //Write log files to folder
    for (let i = 1; i <= 10; i++){
        fs.writeFile(`${dir}/log${i}`, `This is log file #${i}`, (err) =>{
            if (err) throw err;
            console.log(`Job Done #${i}`);
        })
    }
    //Print contents of folder
    fs.readdir(`${dir}`, (err, items) =>{
        console.log("DIRECTORY CONTENTS");
        items.forEach((item) =>{
            console.log(item)
        })
    });
};

createScript();
