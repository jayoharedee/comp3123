const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, './');

const addDir = (dir) => {
    if (fs.existsSync(`${filePath}\/${dir}`)) {
        console.log(`Directory named ${filePath}\/${dir} exists`)
        process.chdir(`${filePath}\/${dir}`)
        console.log(`Changed to ${filePath}\/${dir}`)
        for (let i = 0; i < 10; i++) {
            fs.writeFileSync(`log${i}\.txt`,`lab-test-1 log${i}`)
            console.log(`log${i}\.txt file created`)
        }
    }   else {
        console.log(`Directory named ${filePath}\/${dir} exists`)
        console.log(`${dir} created`)
        process.chdir(`${filePath}\/${dir}`)
        console.log(`Changed to ${filePath}\/${dir}`)
        for (let i = 0; i < 10; i++) {
            fs.writeFileSync(`log${i}\.txt`,`lab-test-1 log${i}`)
            console.log(`log${i}\.txt file created`)
        }
    }
}

addDir('Logs')