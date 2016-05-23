var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SurveySchema= new Schema({
	randomId:String,
	name:String,
	date:{type:Date, default:Date.now},
	_user: {
		type:Schema.Types.ObjectId,
		ref: "User"
	},
	_question:[{type:Schema.Types.ObjectId,
		ref:'question'
	}]
});

var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;