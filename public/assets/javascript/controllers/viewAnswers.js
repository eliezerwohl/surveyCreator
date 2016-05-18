app.controller("viewAnswers", function($scope, $cookies, $http, $state){

$scope.viewAnswersByQuestion = function(){
var cook  = $cookies.get("store")
alert(cook)
}

}) //end of controller