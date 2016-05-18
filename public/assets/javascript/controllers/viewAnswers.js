app.controller("viewAnswers", function($scope, $cookies, $http, $state){

$scope.viewAnswersByQuestion = function(){
var cookie  = $cookies.get("store")
$http({
			method:"POST",
			url:"/viewAnswersByQuestion",
			data:{"id":cookie}
		}).then(function successCallback(response){
			debugger

			
		}, function errorCallback(response){
			
		});
}

}) //end of controller