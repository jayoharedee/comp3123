const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const buf_len = buf.length;

const em = new EventEmitter();
em.once('convert', (event, listener) => {
    if (event === 'convert') {
        em.on('convert', () => {
            console.log('B');
        });
    }
});

em.on('convert', () => {
    for (i = 0; i < buf_len; i++) {
        console.log(buf[i]);
    }
    console.log("buffer converted");
});
em.emit('convert');
