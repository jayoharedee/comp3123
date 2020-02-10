//My Thuy Trang Le - 101136430

const fs = require('fs')
const path = require('path')
const dir = './Logs';

const removeLogs = () => {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(dir, file), err => {
            if (err) throw err;
            console.log(`deleting files... ${file}`)
        })
        }
        fs.rmdir(dir, (err) => {
            if (err) throw err;
            else console.log("Delete Logs directory")
        })
    })
}

removeLogs()