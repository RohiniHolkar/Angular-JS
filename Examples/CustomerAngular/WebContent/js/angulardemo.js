var app = angular.module("demoApp", []);

app.controller("demoCtrl", function($scope) {
 $scope.book = "The Alchemist";
 $scope.author = "Paulo Coelho";
});

app.controller("demoCtrl1", function($scope){
	$scope.book = "Wise and otherwise";
	$scope.author = "Sudha Murti";
});