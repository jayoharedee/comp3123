const fs = require('fs')

const dicrectory = __dirname;
if( !fs.existsSync(dicrectory)){
    fs.mkdirSync(dicrectory);
}

let data = "COMP3123 Lab Test 1"
   
let i=1;
while (i <11){
    fs.writeFile('log'+i+'.txt', data, (err) => { 
        if (err) throw err; 
    })
    console.log('log'+i+'.txt')
    i++;
}