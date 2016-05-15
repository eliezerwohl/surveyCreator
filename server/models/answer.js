var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	_question: {
		type:Schema.Types.ObjectId,
		ref: "question"
	},
	//the person who answered
	email:String,
	//in array in case of mutiple answers
	answer:[]
});

var Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;