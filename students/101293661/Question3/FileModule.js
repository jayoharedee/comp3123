const fs = require('fs');
const path = require('path');
const logsPath = path.join(__dirname, '\\Logs');

// Remove Log files
async function unlinkingLogs() {
    if (fs.existsSync(logsPath)) {
        function readDir() {
            fs.readdir(logsPath, (err, files) => {
                console.log('Files to delete:');
                files.forEach(file => console.log(file));
            });
            const unlinkFiles = () => {
                fs.unlink(logsPath + '\\' + files, function (error) {
                    if (error) console.log(error);
                });
            };
            readDir();
            unlinkFiles();
        }
        // insert await here so the directory is empty when fs.rmdir is called
        fs.rmdir(logsPath, function (error) {
            if (error) {
                console.log(error);
            }
        })
    } else {
        console.log('Logs does not exist');
    }
}

unlinkingLogs();

// Create Log Files
async function handlingLogs() {
    const makeDir = () => {
        if (fs.existsSync(logsPath)) {
            console.log('directory Logs already exists');
        } else {
            fs.mkdir(logsPath, err => {
                if (err) console.log(err);
            });
        }
    }
    await makeDir();
    process.chdir(logsPath);
    const appendFiles = () => {
        for (let i = 0; i <= 10; i++) {
            fs.appendFile('log' + i + '.txt', i + ' some text', err => {
                if (err) console.log(err);
            })
        }
    }
    await appendFiles();

    fs.readdir(logsPath, (err, files) => {
        console.log('Printing files in path:\n' + logsPath);
        files.forEach(file => console.log(file));
    });
}

handlingLogs();