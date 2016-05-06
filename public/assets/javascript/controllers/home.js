app.controller("home", function($scope, $http, $state){

	$scope.newSurvey=function(){
		console.log("new survey")
		$http({
			method:"POST",
			url:"/newSurvey"
		}).then(function successCallback(response){
			debugger
		}, function errorCallback(response){
			debugger
		});
	}

	$scope.login=function(){
		$http({
			method:"POST",
			url:"/login",
			data:{"username":$scope.username,
						"password":$scope.password}
		}).then(function successCallback(response){
			if (response.data == "error"){
				console.log("no")
			}
			else if(response.data="success"){
				$state.go("loggedIn")
			}
		}, function errorCallback(response){
			debugger
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

