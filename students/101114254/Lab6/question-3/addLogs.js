const fs = require('fs')
const path = require('path')

const filePath = (__dirname + '\\logs\\')


const createLogs = function(filePath) {
    if (!fs.existsSync(filePath)){
        fs.mkdir(filePath, { recursive: true }, (err) => {
            if (err) throw err;

            console.log('logs folder created.')
        })
    }

    for ( let x = 1; x < 11; x++){
        tempPath = filePath + "Log" + x + ".txt"
        fs.writeFile(tempPath, "some sample data. ", (err) => {
            if (err) throw err;
            console.log(tempPath + " has been created. ")
        } )
    }
}

const removeLogs = function(filePath) {
    return new Promise((resolve, reject) => {

        fs.readdir(filePath, function(err,files) {
            files.forEach( function (file) {

                tempDir = filePath + file

                fs.unlink(tempDir, function (err) {
                    if (err) reject(err)

                    console.log('deleting files ... ' + file + ' has been deleted.');
                });

                fs.rmdir(filePath, function(err) {
                    if (err) reject(err)
                })

                resolve("success - logs directory has been removed. ")
            })
        }) 
    });
}


// can toggle methods with comments - do be cautious of your directory, it should work 
//          in all workspaces but it was coded with only mine in mind!
createLogs(filePath)

// removeLogs(filePath) 

