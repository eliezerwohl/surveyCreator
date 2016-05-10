app.controller('answer', function($state, $scope, $rootScope, $http) {

$scope.getSurvey=function(){
	$http({
			method:"GET",
			url:"/view"
		}).then(function successCallback(response){
			debugger
		}, function errorCallback(response){
			debugger
		});
}

})