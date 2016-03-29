//populating search taxonomy
/**
 * todo : Need to do this using requireJS
 * */
appModuleController.controller('discoverProductCtrl', function($scope, $stateParams, $http, $state, $ionicLoading, $timeout, $rootScope, $ionicScrollDelegate) {

	///////////////////////////////////////////////////////////////////

	// $scope.items=[{"product_id":"413","commerce_product_sku":"11009009","commerce_product_title":"Angular Sofa","brand":"World Bazar","taxonomy_term_data_field_data_field_colors_name":"Black","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"491","uid":"10","filename":"Chesterfield_Sofa.jpg","uri":"public://Chesterfield_Sofa_0.jpg","filemime":"image/jpeg","filesize":"51104","status":"1","timestamp":"1441950149","rdf_mapping":[],"alt":"Sofa for Living Room","title":"Product Title","width":"692","height":"503"},"commerce_price":"22,000.00  INR","Stock":{"value":"20.00"}},{"product_id":"412","commerce_product_sku":"29001","commerce_product_title":"Elegant Bed King Size","brand":"World Bazar","taxonomy_term_data_field_data_field_colors_name":"Cream","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"490","uid":"12","filename":"wooden-beds-9.jpg","uri":"public://wooden-beds-9.jpg","filemime":"image/jpeg","filesize":"26383","status":"1","timestamp":"1441878315","rdf_mapping":[],"alt":"","title":"","width":"614","height":"530"},"commerce_price":"35,000.00  INR","Stock":{"value":"4.00"}},{"product_id":"411","commerce_product_sku":"190090","commerce_product_title":"Red Sofa","brand":"Mintwud","taxonomy_term_data_field_data_field_colors_name":"Red","taxonomy_term_data_field_data_field_material_name":"Leather","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"489","uid":"12","filename":"Valentine-Sofa-Design.jpg","uri":"public://Valentine-Sofa-Design_0.jpg","filemime":"image/jpeg","filesize":"236673","status":"1","timestamp":"1441878208","rdf_mapping":[],"alt":"","title":"","width":"2502","height":"972"},"commerce_price":"12,000.00  INR","Stock":{"value":"5.00"}},{"product_id":"409","commerce_product_sku":"8971","commerce_product_title":"Sofa","brand":"Durian","taxonomy_term_data_field_data_field_colors_name":"Red","taxonomy_term_data_field_data_field_material_name":"Leatherette","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"443","uid":"1","filename":"bark-furniture-11.jpg","uri":"public://bark-furniture-11_1.jpg","filemime":"image/jpeg","filesize":"155000","status":"1","timestamp":"1441716911","rdf_mapping":[],"alt":"","title":"","width":"1880","height":"850"},"commerce_price":"5,467.00  INR","Stock":{"value":"0.00"}},{"product_id":"406","commerce_product_sku":"144","commerce_product_title":"imported","taxonomy_term_data_field_data_field_colors_name":"Black","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Indian","field_product_image":{"fid":"412","uid":"1","filename":"Modern-Living-Room-Furniture-Inside-Modern-Furniture-Living-Room-Sets-Ideas-Living-Room-Interior.jpg","uri":"public://Modern-Living-Room-Furniture-Inside-Modern-Furniture-Living-Room-Sets-Ideas-Living-Room-Interior.jpg","filemime":"image/jpeg","filesize":"77807","status":"1","timestamp":"1441716690","rdf_mapping":[],"alt":"","title":"","width":"1488","height":"939"},"commerce_price":"5,656.00  INR","Stock":{"value":"0.00"}},{"product_id":"405","commerce_product_sku":"04325","commerce_product_title":"Well maintained","brand":"Durian","taxonomy_term_data_field_data_field_colors_name":"Silver","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"440","uid":"1","filename":"furniture.jpg","uri":"public://furniture_0.jpg","filemime":"image/jpeg","filesize":"62519","status":"1","timestamp":"1441716642","rdf_mapping":[],"alt":"","title":"","width":"748","height":"367"},"commerce_price":"5,643.00  INR","Stock":{"value":"0.00"}},{"product_id":"402","commerce_product_sku":"1902","commerce_product_title":"Furniture","brand":"Mintwud","taxonomy_term_data_field_data_field_colors_name":"Gray","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"437","uid":"1","filename":"sofa10.jpg","uri":"public://sofa10.jpg","filemime":"image/jpeg","filesize":"139418","status":"1","timestamp":"1441716318","rdf_mapping":[],"alt":"","title":"","width":"1280","height":"630"},"commerce_price":"3,214.00  INR","Stock":{"value":"3.00"}},{"product_id":"400","commerce_product_sku":"0311","commerce_product_title":"Sofa","brand":"Durian","taxonomy_term_data_field_data_field_colors_name":"Silver","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"435","uid":"1","filename":"images (6).jpg","uri":"public://images (6)_1.jpg","filemime":"image/jpeg","filesize":"8784","status":"1","timestamp":"1441716064","rdf_mapping":[],"alt":"black sofa","title":"well furnished","width":"243","height":"207"},"commerce_price":"2,222.00  INR","Stock":{"value":"0.00"}},{"product_id":"398","commerce_product_sku":"0211","commerce_product_title":"tables","taxonomy_term_data_field_data_field_colors_name":"Pink","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Indian","field_product_image":{"fid":"433","uid":"1","filename":"furniture2 (1).jpg","uri":"public://furniture2 (1)_1.jpg","filemime":"image/jpeg","filesize":"97566","status":"1","timestamp":"1441715827","rdf_mapping":[],"alt":"Sofa","title":"sofa","width":"750","height":"433"},"commerce_price":"3,458.00  INR","Stock":{"value":"4.00"}},{"product_id":"395","commerce_product_sku":"s_13","commerce_product_title":"well furnished sofa","brand":"@home","taxonomy_term_data_field_data_field_colors_name":"Red","taxonomy_term_data_field_data_field_material_name":"Fabric","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"429","uid":"1","filename":"Furniture2.jpg","uri":"public://Furniture2_3.jpg","filemime":"image/jpeg","filesize":"10741","status":"1","timestamp":"1441715487","rdf_mapping":[],"alt":"sofa","title":"","width":"328","height":"204"},"commerce_price":"6,780.00  INR","Stock":{"value":"0.00"}}];
	$scope.activeOverlay = function(value) {
		$scope.isActive = !$scope.isActive;
		$rootScope.field_product_space_tid = value;
	};

	$scope.activeSpace = function(value) {
		$scope.isActive = !$scope.isActive;
		if (value != undefined) {
			// $rootScope.field_persona_tid = value;
			$state.go('app.discover-product');
			// $state.go('app.looks-landing', {
			//     styleVal: $rootScope.field_product_space_tid,
			//     spaceVal: $rootScope.field_persona_tid
			// });
		}
	};
	
	//shows product overlay for adding to PROJECT/ CART
	$scope.showButtonBox = function(group) {
		console.log(group);
		if ($scope.isActiveBox(group)) {

			$scope.showBoxSkin = null;
		} else {
			$scope.showBoxSkin = group;
		}
	};
	$scope.isActiveBox = function(group) {
		// alert(group);
		return $scope.showBoxSkin === group;
	};

	// Used to toggle favourites
	$scope.flipImage = function(value) {
		$scope["isActive" + value] = !$scope["isActive" + value];
	};

	//replaces the public from values got from json
	$scope.replaceTextOnModelImage = function(values) {
		// console.log(values);
		var cdnPath = 'http://10.20.1.14/discern_new/sites/default/files/';
		var newString = values.replace("public://", localStorage.getItem("dataServerName") + "sites/default/files/");
		return newString;
	};

	// Setup the loader
	$ionicLoading.show({
		content : 'Loading',
		animation : 'fade-in',
		showBackdrop : true,
		maxWidth : 200,
		showDelay : 0
	});

	// Glamour(36) and Classic(35), Space Living Room(77).
	// search category list
	//         1.  http://discern.pro-digi.co.in/gitdiscern/product/discover-chair?field_product_space_tid%5B%5D=77&field_persona_tid%5B%5D=35&field_persona_tid%5B%5D=36  (Discover Chair)
	$http.get(localStorage.getItem("dataServerName") + "product/discover-chair?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsChair = response;
		$ionicLoading.hide();
	});
	// 2.  http://discern.pro-digi.co.in/gitdiscern/product/discover-sofa (Discover sofa)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-sofa?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsSofa = response;
		$ionicLoading.hide();
	});
	// 3.  http://discern.pro-digi.co.in/gitdiscern/product/discover-bed (Discover bed)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-bed?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsBed = response;
		$ionicLoading.hide();
	});
	// 4.  http://discern.pro-digi.co.in/gitdiscern/product/discover-table (Discover table)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-table?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsTable = response;
		$ionicLoading.hide();
	});
	// 5.  http://discern.pro-digi.co.in/gitdiscern/product/discover-home-decor (Discover home decor)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-home-decor?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsHomedecor = response;
		$ionicLoading.hide();
	});
	// 6.  http://discern.pro-digi.co.in/gitdiscern/product/discover-lighting (Discover lighting)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-lighting?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsLighting = response;
		$ionicLoading.hide();
	});
	// 7.  http://discern.pro-digi.co.in/gitdiscern/product/discover-rugs (Discover rugs)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-rugs?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsRugs = response;
		$ionicLoading.hide();
	});
	// 8.  http://discern.pro-digi.co.in/gitdiscern/product/discover-home-textiles (Discover home textiles)

	$http.get(localStorage.getItem("dataServerName") + "product/discover-home-textiles?field_product_space_tid[]=" + $stateParams.spaceVal + "&field_persona_tid[]=35&field_persona_tid[]=36").success(function(response) {
		$scope.itemsHometextiles = response;
		$ionicLoading.hide();
	});

});
