// Create the express router to handle our products requests
var express = require('express');
var router = express.Router();

router.get('/users', function(req, res) {
    res.send('Please log to get a user');
  });
  
router.post('/users', function(req, res) {
  res.send('Please log to create a user');
});

router.put('/users', function(req, res) {
  res.send('Please log to update a user');
});

router.delete('/users', function(req, res) {
  res.send('Please log to delete a user');
});

module.exports = router;