_user:{type:Schema.Types.ObjectId,
			ref:User},
question:String,
lines:{type:Number, default:1},
submissions:[{
	person:{
	submitted:{type:Boolean, default:false}
	},
	email:String,
}]
