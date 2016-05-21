// _user:{type:Schema.Types.ObjectId,
// 			ref:User},
// question:String,
// lines:{type:Number, default:1},
// submissions:[{
// 	person:{
// 	submitted:{type:Boolean, default:false}
// 	},
// 	email:String,
// }]
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SurveySchema= new Schema({
	name:String,
	date:{type:Date, Default:Date.now}
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