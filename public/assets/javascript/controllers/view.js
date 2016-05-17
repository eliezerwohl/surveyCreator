function viewInputAnswers(id){
	var id = id
	document.cookie = "store=" + id 
}

app.controller("view", function($scope, $http, $state){


	function storeData(value, id){
	$http({
			method:"POST",
			url:"/storeData",
			data:{"value":value, "id":id}
		}).then(function successCallback(response){

			
		}, function errorCallback(response){
			
		});
	}


	

$scope.viewAllQuestions = function() {
	$http({
		method: "GET",
		url: "/viewAllQuestions"
	}).then(function successCallback(response) {
		for (var i = 0; i < response.data.length; i++) {
			var question = "<p>the question is " + response.data[i].text + "</p>"
			previewCreator(question)
			var allNum = []
			var total = 0
			var optionArray = []
			function getAll() {
				function calcThis() {
					if (m === response.data[i].options.length - 1){
						var answer = "<p>  " + thisOption + "appears" 
						+ (100 - total) + "%</p>"
						previewCreator(answer)					
					}
					else{
						var answer = "<p> " + thisOption + "appears" +
						Math.round((match / allNum.length) * 100) + "%</p>"
						previewCreator(answer)
						total += Math.round((match / allNum.length) * 100) 
					}
				}
				console.log("all the answered number for this are " + allNum.length)
				// then get each option
				// for loop that, with the array 
				for (var m = 0; m < response.data[i].options.length; m++) {
					var thisOption = response.data[i].options[m]
					var match = 0
					for (var n = 0; n < allNum.length || calcThis(); n++) {
						if (allNum[n] === thisOption) {
							match++
						}
					}
				}
			}
			if (response.data[i].type === "checkbox") {
				var totalOptions = response.data[i].options.length
				var totalAnswers = response.data[i]._answer.length
				for (var k = 0; k < totalAnswers || getAll(); k++) {
					for (var l = 0; l < response.data[i]._answer[k].answer.length; l++) {
						allNum.push(response.data[i]._answer[k].answer[l])
					}
				}
			} 
			else if (response.data[i].type === "radio") {
				for (var k = 0; k < response.data[i].options.length || getAll(); k++) {
					allNum.push(response.data[i]._answer[k].answer[0])
				}
			}
			else if ((response.data[i].type==="input") || (response.data[i].type==="textarea")){
			var id = response.data[i]._id
				var button = "<button onclick='viewInputAnswers(`" +id +"`)'>See all responses  </button>"
				previewCreator(button)
			}
		}
		$scope.data = response.data
	}, function errorCallback(response) {

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
	$scope.test = function(){
		var inputs = document.getElementsByTagName('input');
				function callback(number){
					inputs.splice(number, 1)
					inputs[number]
				console.log(inputs)
			}
		var textarea = document.getElementsByTagName('textarea');
		//need seperate loop, text area doesn't count as an input
			for (var i = 0; i < textarea.length; i++) {
						var value = textarea[i].value
						var id = textarea[i].dataset.id
						var push = false
						console.log("this is a textarea" +value + id + push)
						storeData(value, id)
			}
			var l = inputs.length
			

			for (i = 0; i < l; i++) {
					
					
					if ((inputs[i].type === "checkbox")  && (inputs[i].dataset.number=== "0")){
						var valueArray = [];
						var k = 0;
						for (var j = 0; j < l; j++) {
							k++
							
						
								if ((inputs[j].type === "checkbox") && (inputs[i].dataset.id === inputs[j].dataset.id) && (inputs[j].checked === true )){
										valueArray.push(inputs[j].value)
						
										
								}

							}
						if ( k === inputs.length){
							var value = valueArray
							var id = inputs[i].dataset.id
							storeData(value, id) 
							
						}
					
						// var id = inputs[i].dataset.id
						// var push = true
						// console.log("this is a checkbox" +value + id + push)
						// storeData(value, id)
						//add another value so it will know to push it on

					}
					else if ((inputs[i].type === "radio")  && (inputs[i].checked === true)) {
						// console.log("the value ofo this radion is" + inputs[i].value)
						var value = inputs[i].value
						var id = inputs[i].dataset.id
						console.log("this is a radio" +value + id + push)
						storeData(value, id)

					}
					//if it's just an input
						else if (inputs[i].dataset.type === "input") {
							
						var value = inputs[i].value
						var id = inputs[i].dataset.id
						storeData(value, id)
					}
			}
	}
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
				if(data[i].type === "input"){
					var preview = "<h2>" + data[i].text + "</h2> <input data-id='" 
					+ data[i]._id + "'data-type='input'>"
					previewCreator(preview);
				}
				else if(data[i].type === "textarea"){
					var preview = "<h2>" + data[i].text + "</h2> <textarea  data-id='" 
					+ data[i]._id + "' rows='" + data[i].lines + "'>"
					previewCreator(preview) ;
				}
				else if(data[i].type === "radio"){
					var length = data[i].options.length 
					var preview = "<h2>" + data[i].text + "</h2>";
					for (var j = 0;  j < length; j++){
						
						preview += "<input type = 'radio' value='" + data[i].options[j] + "'data-id='"  + data[i]._id + "'>" + data[i].options[j]
						//minus 1 because j start at zero
						if (j === length - 1){
							previewCreator(preview);
						}
					}
				}
				else if(data[i].type === "checkbox"){
					var length = data[i].options.length 
					var preview = "<h2>" + data[i].text + "</h2>";
					for (var j = 0;  j < length; j++){
						preview += "<input data-number='" + j +"' data-id='" +  data[i]._id 
						+"' value ='" + data[i].options[j] + "' type = 'checkbox'>" + data[i].options[j]
						//minus 1 because j start at zero
						if (j === length - 1){
							previewCreator(preview);
						}
					}
				}		
			}

		}, function errorCallback(reponse){

		});
	}
	$scope.viewAllSurveys = function(){
		$http({
			method:"GET",
			url:"/viewAllSurveys"
		}).then(function successCallback(response){
			$scope.data = response.data
			
		}, function errorCallback(response){
			
		});
	}

})//end of controller