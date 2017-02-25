var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var movie = require('../models/movie.js');
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	movie.all(function(data){
		res.render('movies/index', {movies:data})
	})
  res.send('movies get')
});

// Export routes for server.js to use.
module.exports = router;