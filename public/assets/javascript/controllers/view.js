app.controller("view", function($scope, $http, $state){
	function previewCreator(previewQuestion){
	angular.element(document.getElementById('target'))
	.append(previewQuestion) 

	}
	$scope.previewSurvey = function(){
		$http({
			method:"GET",
			url:"/previewSurvey"
		}).then(function successCallback(response){
			var data = response.data
			
			for (var i = 0; i < data.length; i++) {
				debugger

				if(data[i].type === "input"){
					var preview = "<h2>" + data[i].text + "</h2> <input>"
					previewCreator(preview)
				}
				else if(data[i].type === "textarea"){
					var preview = "<h2>" + data[i].text + "</h2> <textarea rows='" + data[0] + "'>"
					previewCreator(preview)
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