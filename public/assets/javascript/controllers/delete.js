app.controller("delete", function($scope, $http, $state){

$scope.deleteSurvey=function(){
	$http({
			method:"GET",
			url:"/deleteSurvey",
		}).then(function successCallback(response){

			
		}, function errorCallback(response){
			
		});
}

})