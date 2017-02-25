var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var actor = require('../models/actor.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	actor.all(function(data){
		res.render('actors/index', { actors: data} )
	})
	
});

// Export routes for server.js to use.
module.exports = router;