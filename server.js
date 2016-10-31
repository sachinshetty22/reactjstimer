var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));
var port = normalizePort(process.env.PORT || '8080');
app.listen(port, function () {
  console.log('Express server is up on port 3000');
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
