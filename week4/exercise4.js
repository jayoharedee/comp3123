const spawn = require('child_process');
const c = spawn.fork('compute.js');

c.send('start');

c.on('message', (message)=> {
    console.log("longComp result: "+message);
    process.exit();
})

