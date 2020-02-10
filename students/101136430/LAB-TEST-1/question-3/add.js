//My Thuy Trang Le - 101136430

const fs = require('fs')
const path = require('path')
const dir = './Logs';

const addLogs = () => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    process.chdir(dir)
    const ext = '.txt'
    const content = "File "
    const folder = process.cwd()
    for (i = 0; i < 10; i++) {
        fs.writeFileSync('log' + i + ext, content + i)
    }
    fs.readdir(folder, (err, files) => {
        if (err) throw err
        files.forEach(f => console.log(f))
    })
}
addLogs()
