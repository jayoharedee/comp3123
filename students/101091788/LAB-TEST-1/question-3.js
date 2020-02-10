const fs = require('fs');

//1
let logppath = `${process.cwd()}/logs`;

fs.exists(logppath,(exist)=>{

    if(exist){
      
      fs.readdir(logppath,(err,files)=>{
       if(err){
        console.log(err)}


       files.forEach(file=>{
           console.log(`delete files...${file}`)
        
         fs.unlinkSync(`${logppath}/${file}`,()=>{ })

       })


      })
 

    }
})


//2
const fs = require('fs');
let logppath = `${process.cwd()}/logs`;
fs.exists(logppath,(exist)=>{

if(!exist){

fs.mkdir(logppath,()=>{


    process.chdir(logppath);

    for(let i=0; i<10;i++){
         console.log(`log${i}.txt`);
       fs.open(`${logppath}/log${i}.txt`,'w',(err,file)=>{
             
          fs.writeFile(`${logppath}/log${i}.txt`,"something",(err)=>{
            if(err){console.log(err);}    
           

          })

       fs.close(`${logppath}/log${i}.txt`,(err)=>{if(err){console.log(err)}})
       })


    }
})

}


})


