const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.get('/products', function(req, res) {
    res.status(500).send('Server error,please try it later');
});

app.get('/users', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/404.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });