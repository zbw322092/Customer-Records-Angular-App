var app = angular.module("customersApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/customers', {
      controller: "",
      templateUrl: "../app/partials/customers.html"
    })
    .when('/orders', {
    	controller: "",
    	templateUrl: "../app/partials/orders.html"
    })
    .otherwise({ redirectTo: '/customers' });
});