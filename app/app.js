var app = angular.module("customersApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/customers', {
      controller: "CustomersController",
      templateUrl: "../app/partials/customers.html"
    })
    .when('/orders', {
    	controller: "",
    	templateUrl: "../app/partials/orders.html"
    })
    .when('/customerorders/:id', {
      controller: "",
      templateUrl: "../app/partials/customerOrders.html"
    })
    .otherwise({ redirectTo: '/customers' });
});