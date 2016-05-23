app.controller("home", function($scope, $http, $rootScope, $state){

	$scope.goOlder = function(){
		$state.go("viewAllSurveys")
	}
	$scope.location = function(){
		$http({
			method:"GET",
			url:"/location"
		}).then(function successCallback(response){
			if (response.data != ""){

				$state.go("previewSurvey")
			}
		}, function errorCallback(response){
			
		});

	}

	$scope.newSurvey=function(){
		$state.go("createSurvey")
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
			if(response.data==="taken"){
				$scope.msg ="I'm sorry, that username is already taken.  Try another?"
			}
			else{
				debugger
				$rootScope.msg="You've signed up, now sign in..."
				$state.go("index")
			}

		}, function errorCallback(reponse){
			debugger

		});
	}
})//end of controller

