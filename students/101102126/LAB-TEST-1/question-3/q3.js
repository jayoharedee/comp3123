const fs = require('fs')
const path = require('path')

const create = function () {
    if (!fs.existsSync('Logs')){
        fs.mkdirSync('Logs')
    }
    process.chdir('Logs');    
    for(i=0; i< 10; i++){
         fs.writeFile(`log${i}.txt`, "HELLO!", err => {
             if(err) console.log(err);}
         );
         console.log(`log${i}.txt`);
     }
 }
//create()
 
//////////

const remove = () => {
    if(fs.existsSync('Logs')){
        process.chdir('Logs')
        let folder = process.cwd()
        fs.readdir(folder, (err, files) => {
            if (err) throw err
            files.filter(file => path.extname(file) == '.txt')
            .forEach(file => fs.unlinkSync(folder + '/' + file))
            files.filter(file => path.extname(file) == '.txt')
            .forEach(file=> console.log('delete files...' + file))  
        })   
        process.chdir('..')
        fs.rmdir('Logs', (err) => {
            if (err) throw err;
            else{
                console.log("Logs deleted")
            }
        })
    } 
}
remove()
