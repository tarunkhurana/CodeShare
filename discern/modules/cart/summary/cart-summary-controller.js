appModuleController.controller('CartSummaryCtrl', ['CartService', '$scope', '$rootScope', '$state',
function(cartService, $scope, $rootScope, $state) {

	/**
	 * @description: This function is used to set the login overlay
	 * */
	//todo : this could be moved out of rootScope
	$rootScope.activeOverlay = function() {
		$rootScope.isActive = !$rootScope.isActive;

	};
	/**
	 * @description : This function will be used to complete order
	 * */
	$scope.submitOrder = function() {
		cartService.placeOrder().then(function(response) {
			switchOverlay();
		}, function(response) {
			console.log(">>> This space needs to be handled better");
		});
	};

	/**
	 * @description : This function is used to initialize the scope items to be used in the template
	 * */
	var initScope = function() {
		$scope.total = "₹ " + cartService.totalPrice;
		$scope.wip = true;
	};
	/**
	 * @description : This function is used to bind the events for the current scope
	 * */
	var bindEvents = function() {
		var priceEvent = $scope.$on("priceUpdated", function() {
			$scope.total = "₹ " + cartService.totalPrice;
		});
		$rootScope.$watch('stateName', function(newValue, oldValue) {
			var items = cartService.cart.length > 1 ? " items" : " item";
			$scope.isCart = Boolean((newValue !== null && newValue.match(/cart/g)));
			$scope.summaryText = $scope.isCart ? "SHOPPING BAG SUMMARY" : "Order summary (" + cartService.cart.length + items + ")";
		});

		// Destroy all events on scope end
		$scope.$on("$destroy", priceEvent);
	};

	/**
	 * @description: This function is used to toggleAddress/Overlay
	 * */
	var switchOverlay = function() {
		if (localStorage.getItem("userName") === null || localStorage.getItem("userName") === '') {
			$rootScope.activeOverlay();
		} else {
			$state.go('app.address');
		}
	};

	/**
	 * @description : This function is used to call the functions to be used on pageLoad
	 * */
	var pageLoad = function() {
		initScope();
		bindEvents();
	};

	pageLoad();
}]);
