app.controller("view", function($scope, $http, $state){

	function storeData(value, id, push){
	$http({
			method:"POST",
			url:"/storeData",
			data:{"value":value, "id":id, "push":push}
		}).then(function successCallback(response){
			debugger
		}, function errorCallback(response){
			debugger
		});
	}

	$scope.test = function(){
		var inputs = document.getElementsByTagName('input');
			var l = inputs.length
			
			for (i = 0; i < l; i++) {
					if ((inputs[i].type === "checkbox") && (inputs[i].checked === true )){
						var value = inputs[i].value
						var id = inputs[i].dataset.id
						var push = true
						storeData(value, id, push)
						//add another value so it will know to push it on

					}
					else if ((inputs[i].type === "radio")  && (inputs[i].checked === true)) {
						console.log("the value ofo this radion is" + inputs[i].value)

					}
					//if it's just an input
					else{

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
					var preview = "<h2>" + data[i].text + "</h2> <textarea rows='" + data[i].lines + "'>"
					previewCreator(preview) ;
				}
				else if(data[i].type === "radio"){
					var length = data[i].options.length 
					var preview = "<h2>" + data[i].text + "</h2>";
					for (var j = 0;  j < length; j++){
						debugger
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
						preview += "<input data-id='" +  data[i]._id 
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

})//end of controller