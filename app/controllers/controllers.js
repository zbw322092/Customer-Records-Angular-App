app.controller("NavBarController", function($scope, $location) {
	$scope.getClass = function(path) {
		if ($location.path() === path) {
			return true;
		} else {
			return false;
		}
	}
});