appModuleController.controller('addAddressCtrl', ['$rootScope', '$scope', '$timeout', '$state', '$ionicPopup', '$http', '$ionicLoading',
function($rootScope, $scope, $timeout, $state, $ionicPopup, $http, $ionicLoading) {
	$scope.addAdds = function() {
		$state.go('app.address');
	};
	/**
	 * @description : This function add new addresses
	 * */
	$scope.addAddress = function() {

		var addressData = JSON.stringify($scope.addressField);
		addressData = addressData.replace('{', '');
		addressData = addressData.replace('}', '');
		addressData = '[{"uid":"' + localStorage.getItem('userUid') + '",' + addressData + '}]';

		// addressData = '[{"uid": "1", "zip": "1204040", "address": "asdfsad", "email": "ja@ddd.com", "company": "prodigi", "name": "Jaikar", "state": "HR", "city": "fAtehana", "mobile": "989898989"}]';

		console.log(addressData);
		$ionicLoading.show({
			content : 'Loading',
			animation : 'fade-in',
			showBackdrop : true,
			maxWidth : 200,
			showDelay : 0
		});

		// $http.post(localStorage.getItem("dataServerName") + 'usercart/cart_action/add_shipping_info', addressData).then(function successCallback(response) {
		// $http.post(localStorage.getItem("dataServerName") + 'usercart/cart_action/add_billing_info', addressData).then(function successCallback(response) {
		//     // this callback will be called asynchronously
		//     // when the response is available
		//     $ionicLoading.hide();
		//     $scope.addressField = {};
		//     $state.go('app.address');
		// }, function errorCallback(response) {
		//     // called asynchronously if an error occurs
		//     // or server returns response with an error status.
		// });
		$.ajax({
			type : 'POST',
			'contentType' : 'application/json',
			url : localStorage.getItem("dataServerName") + 'usercart/cart_action/add_shipping_info',
			data : addressData,
			processData : false,
		}).done(function(data) {
			$ionicLoading.hide();
			$scope.addressField = {};
			$state.go('app.address');

		});
	};

	/**
	 * @description : This function is used to initialize the scope items to be used in the template
	 * */
	var initScopeItems = function() {
		$scope.addressField = {};
	};

	/**
	 * @description : This function is used to call the functions to be used on pageLoad
	 * */
	var pageLoad = function() {

		initScopeItems();

	};

	pageLoad();

}]);
