const fs = require('fs');
const path = require('path');
const dir = '../lab3/socket-io-lab_starter';
const filePath = path.join(__dirname, dir);

var files = fs.readdirSync(filePath);

var extension = process.argv;

if (extension[2] == null)
    console.log('\n== All files ==')
else
    console.log('\n== ' + extension[2] + ' files ==')

for (i in files) {
    let fileExtension = files[i].split('.').pop();
    if (extension[2] == null) {
        console.log(files[i]);
    } else if (fileExtension == extension[2]) {
        console.log(files[i]);
    }
}
console.log();