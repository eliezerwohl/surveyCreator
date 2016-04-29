var app = angular.module('app', []);

app.controller('create', function($scope, $rootScope) {
	$scope.inputs = [];

$scope.singleInput = function(){
	$scope.inputs.push({
		name: 'Question ',
    model: ""

	})
	// document.getElementById("target").innerHTML = "";
	$rootScope.type = "single";
	// angular.element(document.getElementById("target"))
	// .append("<h2> put question here for single input</h2> <input ng-model='userInput'> ")
}

$scope.textArea = function(){

	// document.getElementById("target").innerHTML = "";
	$rootScope.type = "text";
	// angular.element(document.getElementById('target'))
	// .append("<h2> question for text area </h2> <input ng-model='userInput'>") 
}

$scope.save = function(){
	  $scope.saveIt = ("<h2>" + $scope.inputs[0].model + "</h2> <input>");
	   console.log($scope.inputs)
	   angular.element(document.getElementById('target'))
		.append($scope.saveIt) 
  // document.getElementById("target").innerHTML = "";

}

// $scope.showSave = function()

})