var app = angular.module('app', []);

app.controller('create', function($scope, $rootScope) {

$scope.singleInput = function(){
	$rootScope.type = "single";
	angular.element(document.getElementById("target"))
	.append("<h2> put question here for single input</h2> <input> ")
}

$scope.textArea = function(){
	$rootScope.type = "text";
angular.element(document.getElementById('target'))
	.append("<h2> question for text area </h2> <input>  question </input>") 
console.log("layla")
}

$scope.save = function(){

	console.log($rootScope.type)
}


})