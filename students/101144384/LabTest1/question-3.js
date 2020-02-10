const fs = require('fs');
const path = require('path');

const createScript1 = () =>{
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

const deleteScript1 = () =>{
    const dir = "./Log";

    //Check if folder exists
    if (fs.existsSync(dir)){
        //Print contents of folder
        fs.readdir(dir, (err, items) =>{
            console.log("DIRECTORY CONTENTS");
            items.forEach((item) =>{
                console.log(item)
            });
        //Delete contents of folder
            items.forEach((item) =>{
                console.log(`Deleting ${item}`);
                fs.unlink(path.join(dir, item), err => {
                    if (err) throw err;
                });
            });

        //Delete folder
            fs.rmdirSync(dir);
        });
    } else{
        console.log("Directory does not exist")
    }
};

//createScript();
//deleteScript();
