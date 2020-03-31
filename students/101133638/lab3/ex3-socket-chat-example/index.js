var app = require('express')();
var http = require('http').createServer(app);

//initialize a new instance of socket.io by passing the http (the HTTP server) object
var io = require('socket.io')(http);

app.get('/', function(req, res){
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');
});



// listen on the connection event for incoming sockets, and log it to the console.

// Each socket also fires a special disconnect event:
// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       console.log('message: ' + msg);
//     });
// });

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        // This will emit the event to every one including the sender
        io.emit('chat message', msg);
        
    });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});