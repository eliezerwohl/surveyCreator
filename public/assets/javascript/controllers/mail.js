app.controller("mail", function($scope, $http, $state){
		$scope.data = {
		name:"johnny",
		name:"billy"
	}

$scope.sendMail=function(){
	

$http({
			method:"POST",
			url:"/mail"
		}).then(function successCallback(response){
			
		}, function errorCallback(response){
			debugger
		});
}
})