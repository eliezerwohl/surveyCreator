app.controller('create', function($scope, $rootScope, $http) {

	$scope.inputType=function(input){
		$scope.selectedInput = input
		console.log(input)
	}

	$scope.createQuestion = function(){

		if (($scope.selectedInput == "input") || ($scope.selectedInput == "textarea")) {
			$http({
			method:"POST",
			url:"/createQuestion",
			data:{"type":$scope.selectedInput, 
						"lines":$scope.lines, 
						"text":$scope.text}
		}).then(function successCallback(response){

		}, function errorCallback(reponse){

		});
		}
		else if ($scope.selectedInput == "textarea"){
			console.log("text area hit")
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