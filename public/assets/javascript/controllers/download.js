app.controller("download", function($scope, $http, $state){
	$scope.viewAllQuestions = function() {
	$http({
		method: "GET",
		url: "/viewAllQuestions"
	}).then(function successCallback(response) {
		$scope.tracker = 0 
		for (var i = 0; i < response.data.length; i++) {
			$(".tableBody").append("<td>" + response.data[i].text + "</td>")
		}
		$http({
		method: "POST",
		url: "/download"
	}).then(function successCallback(response) {
		for (var i = 0; i < response.data[0]._answer.length; i++) {
			var group = []
			for (var j = 0; j < response.data.length; j++) {
				for (var k = 0; k < response.data[j]._answer[i].answer.length; k++) {
					group.push(response.data[j]._answer[i].answer[k])
				debugger
				console.log(group)
				}
				
			}
		}
		$scope.dataMan = response.data
		})
	})
			
	// 		$scope.tracker++
	// 		var question = "<h2>"+ response.data[i].text + "</h2>"
	// 		previewCreator(question)
	// 		var allNum = []
	// 		var total = 0
	// 		var optionArray = []
	// 		function getAll() {
	// 			function calcThis() {
	// 				if (m === response.data[i].options.length - 1){
	// 					var answer = "<h5>  " + thisOption + ": " 
	// 					+ (100 - total) + "%</h5>"
	// 					previewCreator(answer)					
	// 				}
	// 				else{
	// 					var answer = "<h5> " + thisOption + ": " +
	// 					Math.round((match / allNum.length) * 100) + "%</h5>"
	// 					previewCreator(answer)
	// 					total += Math.round((match / allNum.length) * 100) 
	// 				}
	// 			}
	// 			console.log("all the answered number for this are " + allNum.length)
	// 			// then get each option
	// 			// for loop that, with the array 
	// 			for (var m = 0; m < response.data[i].options.length; m++) {
	// 				var thisOption = response.data[i].options[m]
	// 				var match = 0
	// 				for (var n = 0; n < allNum.length || calcThis(); n++) {
	// 					if (allNum[n] === thisOption) {
	// 						match++
	// 					}
	// 				}
	// 			}
	// 		}
			// if (response.data[i].type === "checkbox") {
			// 	var totalOptions = response.data[i].options.length
			// 	var totalAnswers = response.data[i]._answer.length
			// 	for (var k = 0; k < totalAnswers || getAll(); k++) {
			// 		for (var l = 0; l < response.data[i]._answer[k].answer.length; l++) {
			// 			allNum.push(response.data[i]._answer[k].answer[l])
			// 		}
			// 	}
			// } 
	// 		  if (response.data[i].type === "radio") {
	// 		$(".tableBody").append("<tr><td>" + response.data[i].text + "</td>")
	// 			for (var k = 0; k < response.data[i]._answer.length; k++) {
	// 				$(".tableBody").append("<td>" + response.data[i]._answer[k].answer[0] + "</td>")
	// 				if (k === response.data[i]._answer.length-1 ){
	// 					$(".tableBody").append("</tr>")
	// 			}
	// 		}
	// 	}
	// 		else if ((response.data[i].type==="input") || (response.data[i].type==="textarea")){
	// 		$(".tableBody").append("<td>" + response.data[i].text + "</td>")
	// 		var id = response.data[i]._id
	// 		var button ="<button class='btn btn-sm btn-default ' id='show"+ $scope.tracker +"' onclick='showAnswer(`show"+ $scope.tracker + "`)'>Show Results </button>"
	// 		// previewCreator(button)
	// 		for (var j = 0; j < response.data[i]._answer.length; j++) {
	// 			var result = "<p class='hideIt show" + $scope.tracker + "'>" +response.data[i]._answer[j].answer[0] + "</p>"
	// 			// previewCreator(result)
	// 		}
			
	// 		}
	// 	}
	// // 	$scope.data = response.data
	// // }, function errorCallback(response) {

	// });
}

})