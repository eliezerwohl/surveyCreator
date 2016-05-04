var home = require("../server/controllers/homeController")
module.exports = function(app){

  app.get("/", function(req, res) {
	res.sendFile(process.cwd() + "/public/home.html")

	app.post("/signUp", home.signUp);
})
};