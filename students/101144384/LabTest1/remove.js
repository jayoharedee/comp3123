const fs = require('fs');
const path = require('path');

const deleteScript = () =>{
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

deleteScript();
