// require the express module
const express = require('express');
const path = require('path');

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/products', function(request, response) {
    response.sendFile(path.join(__dirname, 'products.html'));
  });

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});