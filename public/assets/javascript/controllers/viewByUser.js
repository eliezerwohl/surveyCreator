app.controller("viewByUser", function($scope, $rootScope, $http, $state){


	$rootScope.thisUser= function(id){
		
			$http({
			method:"POST",
			url:"/thisUser",
			data:{"id":id}
		}).then(function successCallback(response){
			
			$state.go("viewByUser")

			
		}, function errorCallback(response){
			
			
		});

	}
$scope.userList= function(){

	$http({
			method:"GET",
			url:"/userList",
		}).then(function successCallback(response){
			
			$scope.data = response.data 

			
		}, function errorCallback(response){
			
		});
}

}) //end of controller