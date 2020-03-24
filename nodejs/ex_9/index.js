// require the express module
const express = require('express');

// then create a express server
const app = express();
const port = 3000;

const Logger = require('logplease');
const logger = Logger.create('index');
// logger.debug(`This is a debug message`);
// logger.log(`This is a log message`); // alias for debug()
// logger.info(`This is a info message`);
// logger.warn(`This is a warning`);
// logger.error(`This is an error`);

// configure the default route and send a text as response
app.get('/', function(request, response) {//need to restart server to see h1
  response.send('<h1>Congrats you\'re using your first Node.js and Express as Web Server</h1>');
});

// configure the port that express is going to listen to
app.listen(3000, function() {
    logger.info(`This HTTP server is running on port ${port}`);
});