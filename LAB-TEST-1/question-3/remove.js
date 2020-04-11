const fs = require('fs')
const path = require('path')
var writeTo = './LAB-TEST-1/question-3/YuShi';
let remove = function () {
    if (!fs.existsSync(writeTo)){
        console.log('no such a directory!');
        return;
    }
   fs.readdir(writeTo, (err, files) => {
        if(files.length==0){
        console.log('no files in this folder！')
        return;
        }
       if (err) throw err;
       for (const file of files) {

            if(files.length==0){
            console.log('no files in this folder！')
            break;
            }
           fs.unlink(path.join(writeTo, file), err => {
           if (err) throw err;
           console.log(`deleting files...${file}`)
       })
       }
       fs.rmdirSync(writeTo);
   })
}
remove()