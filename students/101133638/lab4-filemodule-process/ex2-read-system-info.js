const fs = require('fs');
const path = require('path');
const dir = '../lab3/socket-io-lab_starter';
const filePath = path.join(__dirname, dir);


console.log('== System ==');
console.log(`platform: ${process.platform}`);
console.log(`architecture: ${process.arch}`);

console.log('\n== NodeJS ==');
console.log(`node version: ${process.versions.node}`);
console.log(`V8 version: ${process.versions.v8}`);
console.log(`libuv version: ${process.versions.uv}`);

console.log('\n== Process ==');
console.log(`pid: ${process.ppid}`);
console.log(`title: ${process.title}`);
console.log(`current directory: ${process.cwd()}`);

console.log("");
