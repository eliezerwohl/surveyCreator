app.controller("view", function($scope, $http, $state){

	function storeData(value, id){
		debugger
	$http({
			method:"POST",
			url:"/storeData",
			data:{"value":value, "id":id}
		}).then(function successCallback(response){
			
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
						
						preview += "<input type = 'radio' value='" + data[i].options[j] + "'name='"  + data[i]._id + "'>" + data[i].options[j]
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
			debugger
			
		}, function errorCallback(response){
			
		});
	}

})//end of controller