app.controller('create', function($state, $scope, $rootScope, $http) {


	$scope.getCount = function() {

		var inputs = document.getElementsByTagName('input')
		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].dataset.type === "input") {
				console.log("this is an input, the value is" + inputs[i].value)
			} else if (inputs[i].dataset.type === "textarea") {
				for (var j = 0; j < inputs.length; j++) {
					if ((inputs[i].dataset.name === inputs[j].dataset.name) && (inputs[j].dataset.type === "lines")) {
						console.log("the input is " + inputs[i].value + "options are" + inputs[j].value)


					}
				}

			}
		}
		console.log(inputs)
	}
$scope.count = 0
	$scope.inputCreator = function(type){
		$scope.count++
		if (type === "input"){
		var input = "<h3>what is your question</h3><input data-type='input' data-name='" + $scope.count +"'>"
		angular.element(document.getElementById('target'))
	.append(input)
	}

		else if (type ==="textarea"){
			var input = "<h3>what is your question</h3><input data-type='textarea' data-name='" 
			+ $scope.count +"'><h3>how many lines</h3><input data-type='lines' data-name='" 
			+ $scope.count +"'>"
								angular.element(document.getElementById('target'))
	.append(input)
					} 

	}
	$scope.shareSurvey=function(){
		$http({
				method: "GET",
				url: "/shareSurvey",
			}).then(function successCallback(response) {
				if (response.data.local === true){
					//this is local
					$scope.msg = "Go to http://localhost:8080/viewSurvey/" + response.data.surveyId
				}
				else {
					//for production
					$scope.msg = "Go to name.herokuapp.com/viewSurvey/" + response.data.surveyId
				}
		
			})
	}

	$scope.view=function(){
		$state.go("previewSurvey")
	}

	$scope.inputType=function(input){
		$scope.selectedInput = input
		console.log(input)
	}
	$scope.options = []
	$scope.addOption = function(){
		var test ={"text":"option here"}
		$scope.options.push(test)
		console.log($scope.options)

	}
	$scope.createQuestion = function() {
		function questionCreateFunction() {
			$http({
				method: "POST",
				url: "/createQuestion",
				data: {
					"type": $scope.selectedInput,
					"lines": $scope.lines,
					"text": $scope.text,
					"options": $scope.optionsArray
				}
			}).then(function successCallback(response) {


			}, function errorCallback(reponse) {

			});
		}
		console.log('create')
		$scope.optionsArray = [];
		if (($scope.selectedInput == "radio") || ($scope.selectedInput == "checkbox")) {
			var inputs = document.getElementsByClassName('optionInput');
			var l = inputs.length
			for (i = 0; i < l; i++) {
				var option = {
					"option": inputs[i].value
				}
				$scope.optionsArray.push(option)
				if ($scope.optionsArray.length === l) {
					//waits until all the values of the inputs are added to the array
					console.log("scope.options " + $scope.optionsArray)
					questionCreateFunction()
				}
			}
		} else if (($scope.selectedInput == "input") || ($scope.selectedInput == "textarea")) {
			questionCreateFunction()
		}
	}

// var idLength = 15
// var id = [];
// var bank = [ "1","2","3","4","5","6","7","8","9",'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// idCreator()

// function idCreator(){
// 	for (var i = 0; i < idLength; i++) {
// 		var char = Math.floor(Math.random() * bank.length)
// 		id.push(bank[char])
// 	}
// }
// 	if (id.length = idLength ){
// 		var newId = id.join('')
// 		console.log("new id is " + newId)
// 	}
}) //end of controller