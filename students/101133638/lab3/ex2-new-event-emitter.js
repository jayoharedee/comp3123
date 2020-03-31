// Exercise 2: 
// Write a node script file that uses the buffer above and does the following:
// - creates a new event emitter
// - register an event emitter listener 'convert'
// - when 'convert' listener is called, a callback will iterate over the buffer elements and console log each string element
// - emits the 'convert' event

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

// Include node js events module
var EventEmitter = require('events');

//- creates a new event emitter
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();

// - register an event emitter listener 'convert'
myEmitter.on('convert', (buffer) => {
    for(const key of buffer) {
        console.log(key);  
    }
    console.log('buffer conveted');
})

// - emits the 'convert' event
myEmitter.emit('convert', buf);
