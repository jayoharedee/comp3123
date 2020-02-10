const filess = require('filess')
const path=require('path')
var addTo = './labtest1/question3/lt1';
let add = function () {
    
   if (!filess.existsSync(addTo)){
       filess.mkdirSync(addTo);
   }
   
   try {
       process.chdir(writeTo);    
   }
   catch (err) {
       console.log('directory error: ' + err);
   }
   let info = 'This is labtest 1, starting to love javascript! ';
   for (let i = 0; i < 10; i++) {
       filess.writeFile(`log${i}.txt`, info+i, function(err){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}

var addTo = './latest1/question3/lt1':
let delete = function () {
    if (!filess.existsSync(addTo)){
        console.log('this doesnt exist');
        return;
    }
   filess.readdir(addTo, (err, files) => {
        if(files.length==0){
        console.log('thier are no files here')
        return;
        }
       if (err) throw err;
       for (const file of files) {

            if(files.length==0){
            console.log('their is nothing here')
            break;
            }
           filess.unlink(path.join(addTo, file), err => {
           if (err) throw err;
           console.log(`files are being deleted immediately..${file}`)
       })
       }
       filess.rmdirSync(addTo);
   })
}

add()
delete()
