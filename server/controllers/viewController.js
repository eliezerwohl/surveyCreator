var Question = require("../models/question");
var Survey = require("../models/survey");

exports.viewAllSurveys = function(req, res){
	Survey.find({"_user":req.session.user._id})
	.exec(function(err, docs){
		if (err){
			console.log(err)
		}
		else{
			res.send(docs)
		}
	})
}
exports.viewSurvey = function(req, res){
	req.session.fillSurvey
		//hard coding survey number so I can figure out how to render it, will
	//put req.session.whatever in later
	Question.find({"_survey":"572f7dbac823801140e12e95"})
	.exec(function(err, docs){
		if (err){
			console.log (err)
		}
		else{
			res.send(docs)
		}
	});

}
exports.previewSurvey = function(req, res){
	//hard coding survey number so I can figure out how to render it, will
	//put req.session.whatever in later
	Question.find({"_survey":req.session.fillSurvey})
	.exec(function(err, docs){
		if (err){
			console.log (err)
		}
		else{
			res.send(docs)
		}
	});
}