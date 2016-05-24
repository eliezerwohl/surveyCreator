
exports.deleteSurveyData = function(req, res){
	req.session.deleteId = req.body.id
	res.send("got it")
}
exports.deleteSurvey = function(req, res){
// .remove
	debugger

}