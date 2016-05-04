app.controller("home", function($scope, $http){

	$scope.signUp =function(){
	$http({
		method:"Post",
		url:"/signUp",
		data:{"firstName":$scope.firstName}
	}).then(function successCallback(response){

	}, function errorCallback(reponse){

	});

	}


})//end of controller

