var Question = require("../models/question");

exports.viewAllSurveys = function(req, res){
	debugger
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