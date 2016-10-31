var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));
var port = normalizePort(process.env.PORT || '8080');
app.listen(port, function () {
  console.log('Express server is up on port 3000');
});
