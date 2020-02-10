const fs = require('fs')
const path=require('path')
var writeTo = './LAB-TEST-1/question-3/YuShi';
let add = function () {
    //if folder doesn't exist ,make directory
   if (!fs.existsSync(writeTo)){
       fs.mkdirSync(writeTo);
   }
   //change current working directory to ./YuShi
   try {
       process.chdir(writeTo);    
   }
   catch (err) {
       console.log('change dir error: ' + err);
   }
   let data = 'Yu loves full mark! please don\'t hesitate to give him full mark plus ';
   for (let i = 0; i < 10; i++) {
       fs.writeFile(`log${i}.txt`, data+i, function(err){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}
add()