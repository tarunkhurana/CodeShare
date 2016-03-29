appModuleController.controller('addressCtrl', ['$rootScope', '$scope', '$timeout', '$state', '$ionicPopup', '$http', 'CartService', '$ionicLoading',
function($rootScope, $scope, $timeout, $state, $ionicPopup, $http, cartService, $ionicLoading) {

	/**
	 * @description : This function populates the total saved addresses
	 * */
	// $scope.savedAddress = function() {
	//     // http://discern.pro-digi.co.in/gitdiscern/user-info/shipping-profiles?uid_raw=8
	//     // http://discern.pro-digi.co.in/gitdiscern/user-info/billing-profiles?uid_raw=1
	//     var BASE_URL = localStorage.getItem("dataServerName") + "/user-info/shipping-profiles?uid_raw=1";
	//     return $http.get(BASE_URL).then(function(response) {
	//         $scope.itemsAddress = response.data;
	//         console.log(response.data);
	//         // $ionicLoading.hide();
	//         return $scope.itemsAddress;
	//     });

	// };

	// * if given group is the selected group, deselect it
	// * else, select the given group

	$scope.toggleGroup = function(group) {
		// console.log($scope.isGroupShown(group));

		if ($scope.isGroupShown(group)) {
			// $scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};

	/**
	 * @description : This function is to remove the address from profile
	 * @param : profileID
	 * */
	$scope.removeAddress = function(value) {
		event.stopPropagation();
		$ionicLoading.show({
			content : 'Loading',
			animation : 'fade-in',
			showBackdrop : true,
			maxWidth : 200,
			showDelay : 0
		});
		var addressData = '[{"profile_id":"' + value + '"}]';
		cartService.removeAddress(addressData).then(function() {
			cartService.savedAddress();
			$ionicLoading.hide();
		});
	};

	var bindEvents = function() {
		var addressItem = $scope.$watch(function() {
			return cartService.address;
		}, function(nVal, oldVal) {
			$scope.itemsAddress = cartService.address;
			$scope.toggleGroup(parseInt($scope.itemsAddress[0].profile_id));
		});

		$scope.$on("destroy", addressItem);
	};

	var initScopeItems = function() {
		$scope.itemsAddress = cartService.address;
	};

	/**
	 * @description : This function is used to call the functions to be used on pageLoad
	 * */
	var pageLoad = function() {
		bindEvents();
		initScopeItems();
		// $scope.savedAddress();
	};

	pageLoad();

}]);
