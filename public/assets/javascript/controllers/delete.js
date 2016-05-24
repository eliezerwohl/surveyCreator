app.controller("delete", function($scope, $http, $state){

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