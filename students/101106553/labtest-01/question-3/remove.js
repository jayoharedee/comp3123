let fs = require("fs")

// o	remove all the files from the Logs directory, if exists
// o	output the file names to delete
// o	remove the Logs directory

const deleteFiles = () => {
    let logFiles = fs.readdir(process.cwd() + '/logs', (err, files) => {
        if (err) throw err
        files.forEach(f => {   
            fs.unlink(f, (err) => {
                if (err) throw err;
                console.log(`delete file... ${f}`)
            })
        })
    })
    
} 

const deleteDirectory = () => {
    fs.rmdir(process.cwd() + '/question-3/logs', (err) => {
        if (err) throw err;
    })
}

const removeLogFiles = () => {
    deleteFiles()
    process.chdir('../');
    deleteDirectory()
}

console.log(process.cwd())
removeLogFiles()


