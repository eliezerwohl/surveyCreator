var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;


if (PORT === 8080){
	global.var="true"

}
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
var mongoose = require('mongoose');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

var uristring = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/projects';

mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + uristring);
	}
});

require('./routes')(app);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})