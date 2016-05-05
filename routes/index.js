
var home = require("../server/controllers/homeController")
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcryptjs");
var User = require("../server/models/user")
module.exports = function(app) {
	app.use(require('express-session')({
		secret: 'scroll_buttons',
		resave: true,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: (4 * 60 * 60 * 1000)
		}
	}));
	var isValidPassword = function(user, password) {
		return bcrypt.compareSync(password, user.password);
	}
	app.use(passport.initialize());
	app.use(passport.session());
	passport.use('login', new LocalStrategy({
			passReqToCallback: true
		},
		function(req, username, password, done) {
			User.findOne({
					'username': username
				},
				function(err, user) {
					debugger
					// In case of any error, return using the done method
					if (err)
						return done(err);
					// Username does not exist, log error & redirect back
					if (!user) {
						res.send("username not found!")
						return done(null, false);
					}
					// User exists but wrong password, log the error
					if (!isValidPassword(user, password)) {

						return done(null, false,
							res.send('Invalid Password'));
					}
					req.session.user = user;
					usernameExport = user;
					console.log("logged in?")
					return done(null, user);
				}
			);
		}));


	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});
	app.get("/", function(req, res) {
		res.sendFile(process.cwd() + "/public/home.html")

		app.post('/login',
			passport.authenticate('login', {
				successRedirect: '/home',
				failureRedirect: '/?msg=failure'
			})
		);
		app.post("/signUp", home.signUp);
	})
};