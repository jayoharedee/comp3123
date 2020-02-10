const path = require('path')
const fs = require('fs')

const directoryPath = path.join(__dirname);

function deleteFiles(){
    process.chdir(directoryPath)
    if (fs.existsSync(directoryPath + '\\Logs')){
        process.chdir('Logs')

        fs.readdir(process.cwd(), function (err, files) {
            if (err) {
                return console.log(err)
            }
            files.forEach(function (file) {
                console.log('delete files...' + file + '');
                fs.unlinkSync(file, function (err) {
                    if(err) throw err
                })
            })
        })
        process.chdir('../')
        fs.rmdirSync('Logs')
    }
    else{
        console.log('Logs directory not found')
    }
}

function addFiles(){
    process.chdir(directoryPath);
    if (!fs.existsSync(directoryPath + '\\Logs')){
        fs.mkdirSync('Logs');
    }
    process.chdir('Logs')
    for (var i = 0; i < 10; i++){
        console.log(('log'+[i]+'.txt'))
        fs.writeFileSync('log'+[i]+'.txt', 'this file is not empty')
    }
}

addFiles()
deleteFiles()