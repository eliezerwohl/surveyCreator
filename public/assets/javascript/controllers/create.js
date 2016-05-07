app.controller('create', function($scope, $rootScope, $http) {

	$scope.inputType=function(input){
		$scope.selectedInput = input
		console.log(input)
	}

$scope.options = []

// 	$scope.getValue= function(){
// 		 var inputs = document.getElementsByClassName('optionInput');
// for (i = 0; i < inputs.length;  i++) {

// 	debugger
//     // deal with inputs[index] element.
// }
	// }
	$scope.addOption = function(){
		var test ={"text":"option here"}
		$scope.options.push(test)
		console.log($scope.options)

	}
	$scope.createQuestion = function(){
		console.log('create')
		$scope.optionsArray =[];
		if ($scope.selectedInput == "radio"){

		 		var inputs = document.getElementsByClassName('optionInput');
		 		var l = inputs.length
				for (i = 0; i < l;  i++) {
				
					var option = {"option":inputs[i].value}
    			$scope.optionsArray.push(option)
    			debugger
    			console.log($scope.optionsArray)
    			console.log(l)

 					
    				if ($scope.optionsArray.length === l){
    					debugger
    					console.log("scope.options " + $scope.optionsArray)
    					$http({
			method:"POST",
			url:"/createQuestion",
			data:{"type":$scope.selectedInput, 
						"lines":$scope.lines, 
						"text":$scope.text,
						"options":$scope.optionsArray}
		}).then(function successCallback(response){
			debugger

		}, function errorCallback(reponse){

		});
    				}
    		
				
			}
		}
		else if (($scope.selectedInput == "input") || ($scope.selectedInput == "textarea")) {
			
			console.log($scope.optionsArray)
			$http({
			method:"POST",
			url:"/createQuestion",
			data:{"type":$scope.selectedInput, 
						"lines":$scope.lines, 
						"text":$scope.text,
						"options":optionsArray}
		}).then(function successCallback(response){

		}, function errorCallback(reponse){

		});
		// }
		// else if ($scope.selectedInput == "textarea"){
		// 	console.log("text area hit")
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