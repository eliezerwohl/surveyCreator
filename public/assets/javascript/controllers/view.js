app.controller("view", function($scope, $http, $state){

	$scope.previewSurvey = function(){
		$http({
			method:"GET",
			url:"/previewSurvey"
		}).then(function successCallback(response){

		}, function errorCallback(reponse){

		});
	}

})//end of controller