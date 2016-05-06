var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	_survey: {
		type:Schema.Types.ObjectId,
		ref: "Survey"
	},
	text:String,
	type:{type:String, default:"input"},
	lines:{type:Number, default:1},
	//if radio or checkbox
	_answer:[{type:Schema.Types.ObjectId,
						ref:"answer"}]
});

var Question = mongoose.model("Question", QuestionSchema);
module.exports=Question