app.controller("delete", function($scope, $http, $state){

$scope.destroySession =function(){
			function go(){
			$state.go("index")
			}	
			setTimeout(go, 6000);
			
		

}
	var modal = document.getElementById('myModal');
	
  $scope.close=function(){
  	var span = document.getElementsByClassName("close")[0];

  	modal.style.display = "none";	
  }
 $scope.no=function(){
 	var modal = document.getElementById('myModal');
 	modal.style.display = "none";
 }
$scope.deleteSurvey=function(){
	$http({
			method:"GET",
			url:"/deleteSurvey",
		}).then(function successCallback(response){
			$state.go($state.current, {}, {
    	reload: true
  });
			
		}, function errorCallback(response){
			
		});

}

})