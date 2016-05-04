var User = require("../models/user");

exports.signUp = function (req, res){
	var newUser = new User({"firstName":req.body.firstName,
													"lastName":req.body.lastName,
													"email":req.body.email,
													"password":req.body.password});
	newUser.save(function (err, doc) {
		if (err){
			console.log(err)
		}
		else{
			res.send(doc)
		}
	});
}