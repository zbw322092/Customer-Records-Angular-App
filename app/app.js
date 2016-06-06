var app = angular.module("customersApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/customers', {
		controller: "",
		templateUrl: ""
	})
	.otherwise('/customers');
});