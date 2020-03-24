const express = require('express');
const app = express();

//middlewares are function that are called in order
//app use we can apply middlewares everywhere

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
};

//will run first on every single call
app.use(requestTime);

//fuction will run last
app.get('/', function(req, res) {
    res.status(200).json({
        "status": 200,
        "message": "Este request/response está OK"
      });
});

app.listen(3000, function() {
console.log('Example app listening on port 3000!');
});
