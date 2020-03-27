// Exercise 2
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

myEmitter.on('convert', ()=>{
    buf.forEach(el =>{
        console.log(el);
    })
});

myEmitter.emit('convert');
