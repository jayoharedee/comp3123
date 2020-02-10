const fs = require('fs');
const path = require('path');

const directory = './Logs';

if(process.argv[2] === 'remove') remove()
if(process.argv[2] === 'create') create()

function remove(){
    fs.readdir(directory, (err, files) => {
      if (err) return console.log(err.message)
    
      for (file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
        console.log("Deleted file...."+file)
      }
      fs.rmdir(directory, (err) => {
        if(err) return console.log(err.message)
      })
    });
}

function create(){
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory,  (err) => {
            if(err) return console.log(err.message)
        });
        process.chdir(directory)
        for(i=1;i<11;i++){
            fs.writeFile(`log${i}.txt`, 'Lab test 1 - Question 3',()=>{})
            console.log(`log${i}.txt`); 
        }
    }
    else{
        console.log('Directory already exists')
    }
}
