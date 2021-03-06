function viewInputAnswers(id){
	var id = id
	document.cookie = "store=" + id 
	window.location.hash ="/viewAnswersByQuestion"
}

//show and hide function since I'm not using jquery  

function showAnswer(classShow){
	var hidden = document.getElementsByClassName(classShow)
	var button = document.getElementById(classShow)
	if (hidden[0].style.display === "block") {
		button.innerHTML = "Show Results"
		for (var i = 0; i < hidden.length; i++) {
			hidden[i].style.display = ''; 
		};	
	}
	else {
		button.innerHTML = "Hide Results"
		for (var i = 0; i < hidden.length; i++) {
			hidden[i].style.display = 'block'; 
		};
	}
}


app.controller("view", function($rootScope, $scope, $http, $state){
	var hidden = document.getElementsByClassName('hidden')
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].style.display = ''; 
	};

	function storeData(value, id){
	$http({
			method:"POST",
			url:"/storeData",
			data:{"value":value, "id":id, "randomId":$scope.randomId}
		}).then(function successCallback(response){
			
		}, function errorCallback(response){
			
		});
	}

$scope.viewAllQuestions = function() {
	$http({
		method: "GET",
		url: "/viewAllQuestions"
	}).then(function successCallback(response) {
		$scope.tracker = 0 
		for (var i = 0; i < response.data.length; i++) {
			$scope.tracker++
			var question = "<h2>"+ response.data[i].text + "</h2>"
			previewCreator(question)
			var allNum = []
			var total = 0
			var optionArray = []
			function getAll() {
				function calcThis() {
					if (m === response.data[i].options.length - 1){
						var answer = "<h5>  " + thisOption + ": " 
						+ (100 - total) + "%</h5>"
						previewCreator(answer)					
					}
					else{
						var answer = "<h5> " + thisOption + ": " +
						Math.round((match / allNum.length) * 100) + "%</h5>"
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
			
				for (var k = 0; k < response.data[i]._answer.length || getAll(); k++) {
					allNum.push(response.data[i]._answer[k].answer[0])
				}
			}
			else if ((response.data[i].type==="input") || (response.data[i].type==="textarea")){
			var id = response.data[i]._id
			var button ="<button class='btn btn-sm btn-default ' id='show"+ $scope.tracker +"' onclick='showAnswer(`show"+ $scope.tracker + "`)'>Show Results </button>"
			previewCreator(button)
			for (var j = 0; j < response.data[i]._answer.length; j++) {
				var result = "<p class='hideIt show" + $scope.tracker + "'>" +response.data[i]._answer[j].answer[0] + "</p>"
				previewCreator(result)
			}
			
			}
		}
		$scope.data = response.data
	}, function errorCallback(response) {

	});
}


	$scope.saveSurvey = function() {
	    $http({
	        method: "POST",
	        url: "/surveySave",
	        data: {
	          "surveyId": $scope.surveyId,
	          "randomId": $scope.randomId
	        }
	    }).then(function successCallback(response) {
	        $state.go("surveyThanks")

	        var inputs = document.getElementsByTagName('input');
	        var textarea = document.getElementsByTagName('textarea');
	        //need seperate loop, text area doesn't count as an input
	        for (var i = 0; i < textarea.length; i++) {
	            var value = textarea[i].value
	            var id = textarea[i].dataset.id
	            var push = false
	            console.log("this is a textarea" + value + id + push)
	            storeData(value, id)
	        }
	        var l = inputs.length


	        for (i = 0; i < l; i++) {


	            if ((inputs[i].type === "checkbox") && (inputs[i].dataset.number === "0")) {
	                var valueArray = [];
	                var k = 0;
	                for (var j = 0; j < l; j++) {
	                    k++


	                    if ((inputs[j].type === "checkbox") && (inputs[i].dataset.id === inputs[j].dataset.id) && (inputs[j].checked === true)) {
	                        valueArray.push(inputs[j].value)


	                    }

	                }
	                if (k === inputs.length) {
	                    var value = valueArray
	                    var id = inputs[i].dataset.id
	                    storeData(value, id)

	                }
	            } else if ((inputs[i].type === "radio") && (inputs[i].checked === true)) {
	                // console.log("the value ofo this radion is" + inputs[i].value)
	                var value = inputs[i].value
	                var id = inputs[i].dataset.id
	                console.log("this is a radio" + value + id + push)
	                storeData(value, id)

	            }
	            //if it's just an input
	            else if (inputs[i].dataset.type === "input") {

	                var value = inputs[i].value
	                var id = inputs[i].dataset.id
	                storeData(value, id)
	            }
	        }

	    }, function errorCallback(response) {

	    });
	}
	function previewCreator(previewQuestion){
		angular.element(document.getElementById('target'))
		.append(previewQuestion) 
	}
	
$scope.previewSurvey = function() {

    var idLength = 15
    var id = [];
    var bank = ["1", "2", "3", "4", "5", "6", "7", "8", "9", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    idCreator()

    function idCreator() {

        for (var i = 0; i < idLength; i++) {
            var char = Math.floor(Math.random() * bank.length)
            id.push(bank[char])
        }

        if (id.length === idLength) {
            $scope.randomId = id.join('')

            console.log($scope.randomId)


        }
    }

    $http({
        method: "GET",
        url: "/previewSurvey"
    }).then(function successCallback(response) {
        $scope.surveyId = response.data[0]._id
        $scope.name = response.data[0].name
        var data = response.data[0]._question
        var number = 0
        for (var i = 0; i < data.length; i++) {
            number++
            if (data[i].type === "input") {
                var preview = "<h2>" + data[i].text + "</h2> <input class='col-md-12' data-id='" +
                    data[i]._id + "'data-type='input'>"
                previewCreator(preview);
            } else if (data[i].type === "textarea") {
                var preview = "<h2>" + data[i].text + "</h2> <textarea class='col-md-12' data-id='" +
                    data[i]._id + "' rows='" + data[i].lines + "'>"
                previewCreator(preview);
            } else if (data[i].type === "radio") {
                var length = data[i].options.length
                var preview = "<h2>" + data[i].text + "</h2>";
                for (var j = 0; j < length; j++) {


                    preview += "<label class='radio-inline'><input name ='" + number + "'type = 'radio' value='" + data[i].options[j] + "'data-id='" + data[i]._id + "'>" + data[i].options[j] + "</label>"
                        //minus 1 because j start at zero
                    if (j === length - 1) {
                        previewCreator(preview);
                    }
                }
            } else if (data[i].type === "checkbox") {
                var length = data[i].options.length
                var preview = "<h2>" + data[i].text + "</h2>";
                for (var j = 0; j < length; j++) {
                    preview += "<label class='checkbox-inline'><input data-number='" + j + "' data-id='" + data[i]._id +
                        "' value ='" + data[i].options[j] + "' type = 'checkbox'>" + data[i].options[j] + "</label>"
                        //minus 1 because j start at zero
                    if (j === length - 1) {
                        previewCreator(preview);
                    }
                }
            }
        }

    }, function errorCallback(reponse) {

    });
}
	


})//end of controller