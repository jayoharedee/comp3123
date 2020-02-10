var fs = require('fs');
var filePath = process.cwd() + '/logs';
if (fs.existsSync(filePath)) {
    process.chdir('logs');
    for (var i = 0; i < 10; i++) {
        console.log('deleted files.....log'+[i]+".txt");
        fs.unlinkSync("log"+[i]+".txt");
    }
    process.chdir('../');
    fs.rmdirSync('logs');
} else {
    fs.mkdirSync('logs');
    process.chdir('logs');
    for (var i = 0; i < 10; i++) {
        console.log(('log'+[i]+".txt"));
        fs.writeFileSync('log'+[i]+".txt", "FULLSTACK CLASS");
    }
}