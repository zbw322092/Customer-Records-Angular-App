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



app.controller("NavBarController", function($scope, $location) {
	$scope.getClass = function(path) {
		if ($location.path() === path) {
			return true;
		} else {
			return false;
		}
	}
});





