app.controller("home", function($scope, $http){

	$scope.signUp =function(){
	$http({
		method:"Post",
		url:"/signUp",
		data:{"firstName":$scope.firstName, 
					"lastName":$scope.lastName, 
					"email":$scope.email,
					"password":$scope.password}
	}).then(function successCallback(response){

	}, function errorCallback(reponse){

	});

	}


})//end of controller

