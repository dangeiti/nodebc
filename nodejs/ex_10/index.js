// require the express module
const express = require('express');
var oneLinerJoke = require('one-liner-joke');

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function(req, res) {
    res.send('Welcome!');
});



app.get('/jokes', function(req, res) {
    var getRandomJokeWithTag1 = oneLinerJoke.getRandomJokeWithTag('money');
    var getRandomJokeWithTag2 = oneLinerJoke.getRandomJoke();
    res.send(`First joke : ${getRandomJokeWithTag1.body} Second joke: ${getRandomJokeWithTag2.body}`)
});

app.get('/joke', function(req, res) {
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    res.send(getRandomJoke.body);
});

app.post('/joke', function(req, res) {
    res.send('my jokes are too funny, I\'m not getting new ones from you..');
});

app.put('/joke', function(req, res) {
    res.send('no, no, no.. not changing my act dude!');
});

app.delete('/joke', function(req, res) {
    res.send('good jokes never get to old');
});

app.all('/joke', function(req, res) {
    res.send('I know I\'m so good that you\'re looking for jokes everywhere');
});
// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
  
