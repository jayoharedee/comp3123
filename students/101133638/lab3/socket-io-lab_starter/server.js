var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , server;

var cont = 0;
const port = 4000;

server = http.createServer(function(req, res){
  
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      fs.readFile(__dirname + '/index.html', function(err, data){
          if (err) return send404(res);
          res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
          res.write(data, 'utf8');
          res.end();
      });
      break;

    default: send404(res);
  }
}),

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

server.listen(port, () => {
  console.log(`Server started(Listening) on port: ${port}`);
});

// socket.io, setup
var io = io.listen(server);

// setup socket listeners here
io.on('connection', function (socket) {
  
  cont++;
  
  console.log('New user connected - total connceted: ' + cont);
  
  socket.on('send message', function (msg) {
    io.emit('send message', "server " + msg);
  });

  // socket.on('disconnect', function () {
  //   cont--;
  //   console.log('An user disconnected - total connceted: ' + cont );
  // });
});

server.on('disconnect', function () {
  cont--;
  console.log('An user disconnected - total connceted: ' + cont );
});