const EventEmitter = require('events');
const convert = new EventEmitter();

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])

convert.on('convert', ()=>{
    var arr = [...buf];
    for(var i=0;i<arr.length;i++ ){
        console.log(arr[i]);
    }
    console.log("buffer converted");
})

convert.emit('convert')