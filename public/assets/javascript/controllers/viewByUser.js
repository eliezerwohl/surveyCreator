app.controller("viewByUser", function($scope, $http, $state){

$scope.userList= function(){

	$http({
			method:"GET",
			url:"/userList",
		}).then(function successCallback(response){

			
		}, function errorCallback(response){
			
		});
}

}) //end of controller