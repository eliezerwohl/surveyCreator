var home = require("../server/controllers/homeController")
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var bcrypt =require("bcryptjs");


function saltyhash(pass) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pass, salt);
  return hash;
}

module.exports = function(app){

  app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/home.html")

	app.post("/signUp", home.signUp);
})
};