app.controller("home", function($scope, $http){

	$scope.login=function(){
		$http({
			method:"POST",
			url:"/login",
			data:{"username":$scope.username,
						"password":$scope.password}
		}).then(function successCallback(response){

		}, function errorCallback(reponse){

		});
	}
	$scope.signUp =function(){
		$http({
			method:"POST",
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

