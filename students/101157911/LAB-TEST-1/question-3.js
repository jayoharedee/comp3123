const fs = require('fs')
const path = require('path')
var p = process.cwd()

function rmLogs(){
    fs.readdir(p + '/Logs', (err, files) =>{
        if(fs.existsSync(p + '/Logs'))
            {
                try{
                    for(const f of files){
                        console.log('deleting ' + f)
                        fs.unlink(path.join(p + '/Logs', f), err=>{
                            if(err) console.log(err)
                        })
                    }
                }catch{
                    console.log("no files in Logs")
                }
                finally{
                    fs.rmdir(p + '/Logs', err =>{
                        if(err) console.log(err)
                    })
                }
        }
        else{
            console.log('Logs does not exist.')
        }
        
    })
}

function crLogs(){
    if(!fs.existsSync(p + '/Logs')){
        fs.mkdirSync(p + '/Logs')
    }
    else{
        console.log('logs already exists.')
    }
    process.chdir(p + '/Logs')
        for(x = 1; x <= 10; x++){
            var title = 'f' + x + '.txt'
            fs.appendFile(title, 'This is the content of file' + x, err =>{
                if(err) console.log(err)
            })
            console.log(title)
        }
}

rmLogs()