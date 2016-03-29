// celebrity landing page
/**
 * todo : Need to do this using requireJS
 * */
appModuleController.controller('celebrityCtrl', ['$scope', '$stateParams', '$http', '$timeout', '$ionicLoading', 'DataFactory',
function($scope, $stateParams, $http, $timeout, $ionicLoading, DataFactory) {
	//ref. for the factory function showLoader
	$scope.showLoader = function() {
		DataFactory.showLoader();
		window.plugins.socialsharing.share(null, null, 'https://s3-eu-west-1.amazonaws.com/rbi-blogs/wp-content/uploads/mt/flightglobalweb/blogs/aircraft-pictures/assets_c/2012/11/Colombian-Hercules.-jpg-thumb-560x373-168436.jpg', null);

	};

	// change for the value for fav (heart icon)
	$scope.flipImage = function(value) {
		$scope["isActive" + value] = !$scope["isActive" + value];
	};

	$scope.showButtonBox = function(group) {
		if ($scope.isActiveBox(group)) {

			$scope.showBoxSkin = null;
		} else {
			$scope.showBoxSkin = group;
		}
	};
	$scope.isActiveBox = function(group) {
		return $scope.showBoxSkin === group;
	};

	//replaces the public from values got from json
	$scope.replaceTextOnModelImage = function(values) {
		var cdnPath = 'http://10.20.1.14/discern_new/sites/default/files/';
		var newString = values.replace("public://", localStorage.getItem("dataServerName") + "sites/default/files/");
		return newString;
	};

	// var BASE_URL =  http://10.20.5.155/gitdiscern/feed/feed?nid=112
	var BASE_URL = localStorage.getItem("dataServerName") + 'feed/feed';
	// var BASE_URL = localStorage.getItem("dataServerName") + "feed/feed";
	return $http.get(BASE_URL + '?nid=' + $stateParams.nid).then(function(response) {

		$scope.items = response.data;
		return $scope.items;
	});
}]);
