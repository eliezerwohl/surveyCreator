var Survey = require("../models/survey");


exports.deleteSurveyData = function(req, res){
	req.session.deleteId = req.body.id
	res.send("got it")
}
exports.deleteSurvey = function(req, res){
// .remove
	Survey.remove({ _id: req.session.deleteId }, function(err, docs) {
    if (err) {
    	res.send('error')
           
    }
    else {
    	res.send("deleted");
    }
});

}