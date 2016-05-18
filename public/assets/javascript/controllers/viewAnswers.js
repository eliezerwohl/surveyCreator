app.controller("viewAnswers", function($scope, $cookies, $http, $state){

$scope.viewAnswersByQuestion = function(){
var cookie  = $cookies.get("store")
$http({
			method:"POST",
			url:"/viewAnswersByQuestion",
			data:{"id":cookie}
		}).then(function successCallback(response){
			$scope.data = []
			for (var i = 0; i < response.data.length; i++) {
				debugger
				response.data[1].answer[0]
				$scope.data.push(response.data[i].answer[0])
			}
			

			
		}, function errorCallback(response){
			
		});
}

}) //end of controller