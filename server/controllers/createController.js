var Question = require("../models/question");

exports.createQuestion=function(req, res){
	var newQuestion = new Question({"text":req.body.text,
														"type":req.body.type,
														"lines":req.body.lines});
			newQuestion.save(function (err, doc) {
				if (err){
					console.log(err)
				}
				else{
					res.send(doc)
					console.log(doc)
				}
			});
}