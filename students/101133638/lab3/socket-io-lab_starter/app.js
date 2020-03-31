var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const PORT = 3000;
var clients = 0;

server.listen(PORT, () => {
    console.log(`Server started(listening) on localhost:${PORT}`);
});

app.get('/', (require, response) => {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    clients++;

    //console.log('A new user connected - total connceted: ' + clients);
    //console.log('new user connected');
        
    socket.on('client connect', (data) => {
        console.log('\n' + data.message);
    });

    socket.on('client disconnect', (data) => {
        clients--;
        console.log(data.message);
       // console.log('An user is disconnected - total connceted: ' + clients);
    });

    socket.on('send message', (data) => {
        console.log(data.message);
    });

});


