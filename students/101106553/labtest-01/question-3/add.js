let fs = require("fs")

let currentDirectory = process.cwd();

const createDirectory = () => {
    fs.mkdir(currentDirectory + '/logs', function (err) {
        if (err) throw err;
    });
}

const createFiles = () => {
    for (var i=0; i<10; i++){
        fs.writeFileSync(`log${i}.txt`, `This is file #${i}`, function (err) {
            if (err) throw err;
        });
    }
}

const printFiles = () => {
    let logFiles = fs.readdir(process.cwd(), (err, files) => {
        if (err) throw err
        files.forEach(f => console.log(f))
    })   
}

createLogFiles = () => {
    createDirectory()
    process.chdir('logs');
    createFiles() 
    printFiles() 
}

createLogFiles()

    

