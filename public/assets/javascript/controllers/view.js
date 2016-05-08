app.controller("view", function($scope, $http, $state){

	$scope.previewSurvey = function(){
		$http({
			method:"GET",
			url:"/previewSurvey"
		}).then(function successCallback(response){
			var data = response.data
			
			for (var i = 0; i < data.length; i++) {
				debugger

				if(data[i].type === "input"){
					console.log("this is input")
				}
				else if(data[i].type === "textarea"){
					console.log("textarea")
				}
				else if(data[i].type === "radio"){
					console.log("radio")
				}
				else if(data[i].type === "checkbox"){
					console.log("checkbox")
				}
				
			}

		}, function errorCallback(reponse){

		});
	}

})//end of controller