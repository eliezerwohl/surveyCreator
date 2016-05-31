app.controller("viewAllSurveys", function($rootScope, $scope, $http, $state){

$scope.viewAllSurveys = function(){
		$http({
			method:"GET",
			url:"/viewAllSurveys"
		}).then(function successCallback(response){
			$scope.data = response.data
			
		}, function errorCallback(response){
			
		});
	}

	$scope.deleteSurvey = function(id){
		$http({
			method:"POST",
			url:"/deleteSurveyData",
			data:{"id":id}
		}).then(function successCallback(response){
			$state.go('deleteConfirm')
		}, function errorCallback(response){
			
		});
	}

	$scope.goTo = function(id){
		$http({
			method:"POST",
			url:"/goTo",
			data:{"id":id}
		}).then(function successCallback(response){
					$state.go("viewAllQuestions")
		}, function errorCallback(response){
			
		});
	}

		$scope.viewUsers = function(id){
		$http({
			method:"POST",
			url:"/surveyId",
			data:{"id":id}
		}).then(function successCallback(response){
			$state.go("viewUserList")
		}, function errorCallback(response){
			
		});
	}


		// When the user clicks on the button, open the modal 
	$scope.modalGo = function(id) {
		$http({
			method: "POST",
			url: "/deleteSurveyData",
			data: {
				"id": id
			}
		}).then(function successCallback(response) {
			var modal = document.getElementById('myModal');
			modal.style.display = "block"
		}, function errorCallback(response) {

		});;
	}
	window.onload = function() {
	var modal = document.getElementById('myModal');
	var btn = document.getElementsByClassName("myBtn");
	var span = document.getElementsByClassName("close")[0];
	var no = document.getElementsByClassName("no")[0]
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	no.onclick = function() {
			modal.style.display = "none";
		}
		// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

});