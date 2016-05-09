var Question = require("../models/question");
var Survey = require("../models/survey");

exports.storeData = function(req, res){
	//create new answer, put the question 
	//find the question, push answer into array

	debugger
}
exports.createQuestion=function(req, res){
	debugger
	var newQuestion = new Question({
		"text": req.body.text,
		"type": req.body.type,
		"_survey": req.session.survey,
		"lines": req.body.lines,
		"options":req.body.options
	});
	newQuestion.save(function(err, doc) {
		if (err) {
			console.log(err)
		} else {
			debugger
			var surveyId = req.session.survey
			Survey.findByIdAndUpdate(surveyId, {
				$push: {
					"_question": doc._doc._id
				}
			}, {
				safe: true,
				upsert: true
			}, function(err, model) {
				debugger
				console.log("it worked?")
			})
			res.send(doc)
			console.log(doc)
		}
	});
}