var Question = require("../models/question");
var Survey = require("../models/survey");

exports.viewAllQuestions = function(req, res){
	Question.find({"_survey":req.session.surveyId})
	.populate("_answer")
	.exec(function(err, docs){
		debugger
		if (err){
			res.send(err)
		}
		else{
			res.send(docs)
		}
	})
}

exports.goTo = function(req, res){
	debugger
	req.session.surveyId = req.body.id
	res.send('got it')
}

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