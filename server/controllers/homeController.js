var User = require("../models/user");
var Survey = require("../models/survey");
var bcrypt =require("bcryptjs");

function saltyhash(pass) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pass, salt);
  return hash;
}
exports.newSurvey = function(req, res){
	//create new survey, put user id in it req.session.user._id
	var newSurvey = new Survey({"_user":req.session.user._id});
	newSurvey.save(function (err, doc) {
		if (err){
			console.log(err)
		}
		else{
			res.send(doc)
			console.log(doc)
		}
	});
}
exports.signUp = function (req, res){
	User.findOne({email:req.body.email}, function(err, user){
		debugger
		if (err){
			res.send("taken")
		}
		else if(user){
			console.log(user)
		}
		else{
			var newUser = new User({"firstName":req.body.firstName,
														"lastName":req.body.lastName,
														"username":req.body.email,
														"password":saltyhash(req.body.password)});
			newUser.save(function (err, doc) {
				if (err){
					console.log(err)
				}
				else{
					res.send(doc)
				}
			});
		}
	});
}