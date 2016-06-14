app.controller('CustomersController', function($scope, customersService) {
	// unnecessary
	// $scope.firstName;
	// $scope.lastName;
	// $scope.city;
	
	$scope.customers = customersService.getCustomers();

	$scope.addCustomer = function(firstName, lastName, city) {
		customersService.insertCustomer(firstName, lastName, city);
		// since ng-repeat has been written in HTML file, when new records are added into customers
		// array, the records will be shown immediately. So the following line code is not necessary.
		// $scope.customers;
	};

	$scope.removeCustomer = function(id) {
		customersService.deleteCustomer(id);
	};
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





