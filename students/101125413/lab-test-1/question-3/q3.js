const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname + '/logs/')

// remove log files: output file names of deleted, remove logs directory
const removeLogs = function(filePath) {
    return new Promise((resolve,reject) => {
        fs.readdir(filePath, function(err, data){
            data.forEach(function(d){
                tempDir = filePath + d

                fs.unlink(tempDir, function(err) {
                    if (err) throw err
                    console.log(`delete files... ${d}`)
                })

                fs.rmdir(filePath, function(err) {
                    if (err) reject(err)
                })

                resolve("success - logs directory has been removed. ")
            })
        })
    })
}


// create log files: create directory if dne, change current directory
// to new logs directory, change 10 log files, write some text into file
const createLogs = function(filePath) {
    if(!fs.existsSync(filePath)){
        fs.mkdir(filePath, {recursive: true}, (err) => {
            if (err) throw err
        })
    }

    for (let i = 0; i < 10; i++){
        tempPath =  filePath + `log${i}.txt`
        fs.writeFile(tempPath, 'testing', function (err) {
            if (err) throw err
        })
        console.log(`log${i}.txt`)

    }
}

//removeLogs(filePath)
createLogs(filePath)