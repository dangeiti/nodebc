// require the express module
const express = require('express');

// then create a express server
const app = express();

const jsonMessage = {
    description: 'Products',
    items: [
      { name: 'Star Wars jacket' , price: 100},
      { name: 'FIFA 22 PS4' , price: 79},
      { name: 'Superheore t-shirt' , price: 10},
      { name: 'Jets game shirt' , price: 200},
      { name: 'Large Meat lovers pizza' , price: 12},
      { name: 'Canada Dry  bottle' , price: 2}
    ]
  };


// configure the default route and send a text as response
app.get('/api/products', function(request, response) {
//   response.send(jsonMessage);
    response.json(jsonMessage);
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});