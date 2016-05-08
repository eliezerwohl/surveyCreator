app.controller('create', function($state, $scope, $rootScope, $http) {

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