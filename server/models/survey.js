var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SurveySchema= new Schema({
	name:String,
	date:{type:Date, Default:Date.now},
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