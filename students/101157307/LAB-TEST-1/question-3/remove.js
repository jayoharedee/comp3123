const fs = require('fs');
const path = require('path');

const logsDirectory = __dirname +"/logs"
const deleteFiles  = new Promise((resolve,reject)=> {
    //delete all files
    fs.readdir(logsDirectory, (err, files )=> {
    if (err) throw err;
    for (const file of files ){
        console.log(file)
       fs.unlinkSync(path.join(logsDirectory,file));
    }
    fs.rmdir(logsDirectory,(err)=>console.log(err))
    
})
    resolve();
}

);

deleteFiles.then(()=> {
    
})
