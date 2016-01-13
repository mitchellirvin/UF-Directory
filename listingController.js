angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings; // This somehow ties the listingFactory to the scope object listings.
    $scope.detailedInfo = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
    */
	
	
	// I'm not sure how to write the addListing function without using parameters.
    $scope.addListing = function() {
		var newListing = {"code":$scope.bcode, "name":$scope.bname, "coordinates": {"latitude":$scope.lat, "longitude":$scope.lon}, "address":$scope.addr}; 
		$scope.listings.push(newListing);
	};
    $scope.deleteListing = function(index) {
		if (index > -1) {
			$scope.listings.splice(index, 1);
		}
	};
    $scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index];
	};
  }
]);