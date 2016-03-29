// populating filter
/**
 * todo : Need to do this using requireJS
 * */
appModuleController.controller('filterCtrl', function($scope, $http) {

	// populating fiter colors in modal view
	var BASE_URL = localStorage.getItem("dataServerName") + "product/color_list";
	return $http.get(BASE_URL).then(function(response) {
		$scope.itemsColor = response.data;
		return $scope.itemsColor;
	});

	//todo : handle all the ajax BE related communication in services
	//todo : this could be moved in services/resolve !!!
	$http.get(localStorage.getItem("dataServerName") + "product/lists").success(function(response) {
		$scope.items = response;
	});

	//replaces the public from values got from json
	//todo : this code seems to be replicated !!!
	$scope.replaceTextOn = function(values) {
		var cdnPath = 'http://10.20.1.14/discern_new/sites/default/files/';
		var newString = values.replace("public://", localStorage.getItem("dataServerName") + "sites/default/files/");
		return newString;
	};

});
