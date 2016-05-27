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
					
					var randomId = response.data[i].randomId
					var answer = response.data[i].answer[0]
					var object = {"answer":answer, "randomId":randomId}
				$scope.data.push(object)
			}
			

			
		}, function errorCallback(response){
			
		});
}

}) //end of controller