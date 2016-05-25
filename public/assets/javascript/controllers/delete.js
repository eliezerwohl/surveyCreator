app.controller("delete", function($scope, $http, $state){

$scope.destroySession =function(){
	$http({
			method:"POST",
			url:"/logout",
		}).then(function successCallback(response){

			$state.go("index")
			
		}, function errorCallback(response){
			
		});

}

$scope.deleteSurvey=function(){
	$http({
			method:"GET",
			url:"/deleteSurvey",
		}).then(function successCallback(response){
			$state.go("viewAllSurveys")
			
		}, function errorCallback(response){
			
		});
}

})