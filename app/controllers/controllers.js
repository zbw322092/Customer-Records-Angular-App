// Customers Controller
app.controller('CustomersController', function($scope, customersService) {
  // unnecessary
  // $scope.firstName;
  // $scope.lastName;
  // $scope.city;

  function init() {
    $scope.customers = customersService.getCustomers();
  }

  init();

  // $scope.addCustomer = function(firstName, lastName, city) {
  // 	customersService.insertCustomer(firstName, lastName, city);
  // 	// since ng-repeat has been written in HTML file, when new records are added into customers
  // 	// array, the records will be shown immediately. So the following line code is not necessary.
  // 	// $scope.customers;
  // };

  // improve version
  $scope.addCustomer = function(firstName, lastName, city) {
    customersService.insertCustomer(firstName, lastName, city);
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.city = "";
  };

  // or
  // $scope.addCustomer = function() {
  // 	var firstName = $scope.firstName;
  // 	var lastName = $scope.lastName;
  // 	var city = $scope.city;
  // 	customersService.insertCustomer(firstName, lastName, city);		
  // 	$scope.firstName = "";
  // 	$scope.lastName = "";
  // 	$scope.city = "";
  // };

  $scope.removeCustomer = function(id) {
    customersService.deleteCustomer(id);
  };
});





// Orders Controller
app.controller('OrdersController', function($scope, customersService) {
  $scope.customers = customersService.getCustomers();

});

app.controller('OrderChildController', function($scope) {
  if ($scope.customer.orders) {
    var sumPrice = 0;
    for (var i = 0; i < $scope.customer.orders.length; i++) {
      sumPrice += $scope.customer.orders[i].orderTotal;
    }
    $scope.sum = sumPrice;
    return $scope.sum;

    // Another solution
    // $scope.sum = 0;
    // for (var i = 0; i < $scope.customer.orders.length; i++) {
    // 	$scope.sum += $scope.customer.orders[i].orderTotal;
    // }
    // return $scope.sum;

  } else {
  	$scope.sum = 0;
	console.log($scope.customer.orders);
    return $scope.sum;    
  }
  

});




app.controller("NavBarController", function($scope, $location) {
  $scope.getClass = function(path) {
    if ($location.path() === path) {
      return true;
    } else {
      return false;
    }
  }
});