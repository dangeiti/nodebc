const express = require('express');
const app = express();

// Routers
const home = require('./home.js');
const user = require('./user.js');

// configure the port that express is going to listen to
app.use('/', home);
app.use('/user', user);

//http://localhost:3000/user/users to call it

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });