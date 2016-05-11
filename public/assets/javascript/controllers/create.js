
	function test(id, type){
		// data type and data name
		var input="<div>option</div> <input data-type='" + type +"' data-name='" + id +"'>"
	angular.element(document.getElementById(id))
	.append(input)
}

app.controller('create', function($state, $scope, $rootScope, $http) {
	
	$scope.save = function() {
		var inputs = document.getElementsByTagName('input')


		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].dataset.type === "input") {
				createQuestion(inputs[i].dataset.type, null, inputs[i].value , null)
				console.log("this is an input, the value is" + inputs[i].value)
			} else if (inputs[i].dataset.type === "textarea") {
				for (var j = 0; j < inputs.length; j++) {
					if ((inputs[i].dataset.name === inputs[j].dataset.name) && (inputs[j].dataset.type === "lines")) {
						createQuestion(inputs[i].dataset.type, inputs[j].value, inputs[i].value, null)
					}
				}

			}else if ((inputs[i].dataset.type === "radio") || (inputs[i].dataset.type === "checkbox")){
				var optionsArray = []
				var k = 0
				for (var j = 0; j < inputs.length; j++) {
					k++
					if ((inputs[i].dataset.name === inputs[j].dataset.name) && (inputs[j].dataset.type === "options")) {
						optionsArray.push(inputs[j].value)
					}
				}
				//when loop is done, can now send data to be stored
				if (k === inputs.length){
						createQuestion(inputs[i].dataset.type, null, inputs[i].value, optionsArray)
				}
			}
		}
	}
$scope.count = 0

	$scope.inputCreator = function(type) {
		var panelStart =  "<div class='panel panel-info'><div class='panel-body'>"
		var panelEnd = "</div> </div>"
		$scope.count++
			if (type === "input") {
				var input = panelStart 
				+"<h4>what is your question</h4><input data-type='input' data-name='" 
				+ $scope.count + "'>" 
				+panelEnd
				angular.element(document.getElementById('target'))
					.append(input)
			} else
		if (type === "textarea") {
			var input = panelStart
			+"<h4>what is your question</h4><input data-type='textarea' data-name='"
			+$scope.count + "'><h4>how many lines</h4><input data-type='lines' data-name='" 
			+$scope.count + "'>" + panelEnd
			angular.element(document.getElementById('target'))
				.append(input)
		} else if (type === "checkbox") {
			var input = panelStart 
			+"<h4>what is your question</h4><input data-type='checkbox' data-name='" 
			+$scope.count + "'><button onclick='test(" + $scope.count +  ",`options`)'class='moreOptions(" + $scope.count + ")'> try </button>" +
				"<div id ='" + $scope.count + "'>" 
				+panelEnd
			var el = angular.element(input);
			angular.element(document.getElementById('target'))
				.append(el)
		}
		else if (type ==="radio"){
				var input = panelStart 
				+ "<h4>what is your question</h4><input data-type='radio' data-name='" +
				$scope.count + "'><button onclick='test(" + $scope.count +  ",`options`)'class='moreOptions(" + $scope.count + ")'> try </button>" +
				"<div id ='" + $scope.count + "'>" 
				+panelEnd
			var el = angular.element(input);
			angular.element(document.getElementById('target'))
				.append(el)
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
	function createQuestion(type, lines, text, options){
		debugger
		$http({
				method: "POST",
				url: "/createQuestion",
				data: {
					"type": type,
					"lines": lines,
					"text": text,
					"options": options
				}
			}).then(function successCallback(response) {


			}, function errorCallback(reponse) {

			});

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