const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 8080;
const publicPath = path.resolve(__dirname);

// // socket.io server
// io.on('connection', function (socket) {
//   socket.emit('server event', { foo: 'bar' });
//   socket.on('client event', function (data) {
//     socket.broadcast.emit('update label', data);
//   });
// });

// We point to our static assets
app.use(express.static(__dirname + '/index.html'));


// server and routing
app.listen(port, () => {
  console.log("Frontend server is now running on port: " + port);
});
