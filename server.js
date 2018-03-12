const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let numConnected = 0;

app.use(require('morgan')('dev'));

io.on('connection', (socket) => {
  numConnected += 1;
  console.log('\x1b[32m', "User connected, total connected: " + numConnected);

  io.emit("count", numConnected)

  socket.on('disconnect', () => {
    numConnected -= 1;
    console.log('\x1b[31m', "User disconnected, total connected: " + numConnected);
  });

});

http.listen(8080, '0.0.0.0', () => {console.log("Listening on port 8080")});