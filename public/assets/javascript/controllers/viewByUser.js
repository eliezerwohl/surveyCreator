app.controller("viewByUser", function($scope, $rootScope, $http, $state){

	function renderByUser(question, answer){
		debugger
	}
	$scope.viewByUserResults=function(){
		
	$http({
		method: "GET",
		url: "/viewAllQuestions"
	}).then(function successCallback(response) {

		for (var i = 0; i < response.data.length; i++) {
			
			for (var j = 0; j < response.data[i]._answer.length; j++) {
				
				console.log($rootScope.thisUserId)
				
				if (response.data[i]._answer[j].randomId === $rootScope.thisUserId){
					
					var question = response.data[i].text 
					var answer = response.data[i]._answer[j].answer[0]
					renderByUser(question, answer)
				}
			}
		}


	})

}
	$rootScope.thisUser= function(id){
		
		$rootScope.thisUserId = id
		
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