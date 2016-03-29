//populating search taxonomy
/**
 * todo : Need to do this using requireJS
 * */
appModuleController.controller('discoverCtrl', function($scope, $stateParams, $http, $state, $ionicLoading, $timeout, $rootScope, $ionicModal) {
	// $scope.items=[{"product_id":"413","commerce_product_sku":"11009009","commerce_product_title":"Angular Sofa","brand":"World Bazar","taxonomy_term_data_field_data_field_colors_name":"Black","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"491","uid":"10","filename":"Chesterfield_Sofa.jpg","uri":"public://Chesterfield_Sofa_0.jpg","filemime":"image/jpeg","filesize":"51104","status":"1","timestamp":"1441950149","rdf_mapping":[],"alt":"Sofa for Living Room","title":"Product Title","width":"692","height":"503"},"commerce_price":"22,000.00  INR","Stock":{"value":"20.00"}},{"product_id":"412","commerce_product_sku":"29001","commerce_product_title":"Elegant Bed King Size","brand":"World Bazar","taxonomy_term_data_field_data_field_colors_name":"Cream","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"490","uid":"12","filename":"wooden-beds-9.jpg","uri":"public://wooden-beds-9.jpg","filemime":"image/jpeg","filesize":"26383","status":"1","timestamp":"1441878315","rdf_mapping":[],"alt":"","title":"","width":"614","height":"530"},"commerce_price":"35,000.00  INR","Stock":{"value":"4.00"}},{"product_id":"411","commerce_product_sku":"190090","commerce_product_title":"Red Sofa","brand":"Mintwud","taxonomy_term_data_field_data_field_colors_name":"Red","taxonomy_term_data_field_data_field_material_name":"Leather","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"489","uid":"12","filename":"Valentine-Sofa-Design.jpg","uri":"public://Valentine-Sofa-Design_0.jpg","filemime":"image/jpeg","filesize":"236673","status":"1","timestamp":"1441878208","rdf_mapping":[],"alt":"","title":"","width":"2502","height":"972"},"commerce_price":"12,000.00  INR","Stock":{"value":"5.00"}},{"product_id":"409","commerce_product_sku":"8971","commerce_product_title":"Sofa","brand":"Durian","taxonomy_term_data_field_data_field_colors_name":"Red","taxonomy_term_data_field_data_field_material_name":"Leatherette","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"443","uid":"1","filename":"bark-furniture-11.jpg","uri":"public://bark-furniture-11_1.jpg","filemime":"image/jpeg","filesize":"155000","status":"1","timestamp":"1441716911","rdf_mapping":[],"alt":"","title":"","width":"1880","height":"850"},"commerce_price":"5,467.00  INR","Stock":{"value":"0.00"}},{"product_id":"406","commerce_product_sku":"144","commerce_product_title":"imported","taxonomy_term_data_field_data_field_colors_name":"Black","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Indian","field_product_image":{"fid":"412","uid":"1","filename":"Modern-Living-Room-Furniture-Inside-Modern-Furniture-Living-Room-Sets-Ideas-Living-Room-Interior.jpg","uri":"public://Modern-Living-Room-Furniture-Inside-Modern-Furniture-Living-Room-Sets-Ideas-Living-Room-Interior.jpg","filemime":"image/jpeg","filesize":"77807","status":"1","timestamp":"1441716690","rdf_mapping":[],"alt":"","title":"","width":"1488","height":"939"},"commerce_price":"5,656.00  INR","Stock":{"value":"0.00"}},{"product_id":"405","commerce_product_sku":"04325","commerce_product_title":"Well maintained","brand":"Durian","taxonomy_term_data_field_data_field_colors_name":"Silver","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"440","uid":"1","filename":"furniture.jpg","uri":"public://furniture_0.jpg","filemime":"image/jpeg","filesize":"62519","status":"1","timestamp":"1441716642","rdf_mapping":[],"alt":"","title":"","width":"748","height":"367"},"commerce_price":"5,643.00  INR","Stock":{"value":"0.00"}},{"product_id":"402","commerce_product_sku":"1902","commerce_product_title":"Furniture","brand":"Mintwud","taxonomy_term_data_field_data_field_colors_name":"Gray","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"437","uid":"1","filename":"sofa10.jpg","uri":"public://sofa10.jpg","filemime":"image/jpeg","filesize":"139418","status":"1","timestamp":"1441716318","rdf_mapping":[],"alt":"","title":"","width":"1280","height":"630"},"commerce_price":"3,214.00  INR","Stock":{"value":"3.00"}},{"product_id":"400","commerce_product_sku":"0311","commerce_product_title":"Sofa","brand":"Durian","taxonomy_term_data_field_data_field_colors_name":"Silver","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"435","uid":"1","filename":"images (6).jpg","uri":"public://images (6)_1.jpg","filemime":"image/jpeg","filesize":"8784","status":"1","timestamp":"1441716064","rdf_mapping":[],"alt":"black sofa","title":"well furnished","width":"243","height":"207"},"commerce_price":"2,222.00  INR","Stock":{"value":"0.00"}},{"product_id":"398","commerce_product_sku":"0211","commerce_product_title":"tables","taxonomy_term_data_field_data_field_colors_name":"Pink","taxonomy_term_data_field_data_field_material_name":"Engineered Wood","taxonomy_term_data_field_data_field_product_origin_name":"Indian","field_product_image":{"fid":"433","uid":"1","filename":"furniture2 (1).jpg","uri":"public://furniture2 (1)_1.jpg","filemime":"image/jpeg","filesize":"97566","status":"1","timestamp":"1441715827","rdf_mapping":[],"alt":"Sofa","title":"sofa","width":"750","height":"433"},"commerce_price":"3,458.00  INR","Stock":{"value":"4.00"}},{"product_id":"395","commerce_product_sku":"s_13","commerce_product_title":"well furnished sofa","brand":"@home","taxonomy_term_data_field_data_field_colors_name":"Red","taxonomy_term_data_field_data_field_material_name":"Fabric","taxonomy_term_data_field_data_field_product_origin_name":"Imported","field_product_image":{"fid":"429","uid":"1","filename":"Furniture2.jpg","uri":"public://Furniture2_3.jpg","filemime":"image/jpeg","filesize":"10741","status":"1","timestamp":"1441715487","rdf_mapping":[],"alt":"sofa","title":"","width":"328","height":"204"},"commerce_price":"6,780.00  INR","Stock":{"value":"0.00"}}];
	$scope.activeOverlay = function(value) {
		$scope.isActive = !$scope.isActive;
		$rootScope.field_product_space_tid = value;
	};

	$scope.activeSpace = function(value) {
		$scope.isActive = !$scope.isActive;
		if (value != undefined) {
			// $rootScope.field_persona_tid = value;
			$state.go('app.discover-product', {
				spaceVal : value
			});
			// $state.go('app.looks-landing', {
			//     styleVal: $rootScope.field_product_space_tid,
			//     spaceVal: $rootScope.field_persona_tid
			// });
		}
	};
	// loadPersonaImage();

	// Setup the loader
	// $ionicLoading.show({
	//     content: 'Loading',
	//     animation: 'fade-in',
	//     showBackdrop: true,
	//     maxWidth: 200,
	//     showDelay: 0
	// });

	// // search category list
	// $http.get(localStorage.getItem("dataServerName") + "product/searchcat_list")
	//     .success(function(response) {
	//         $scope.itemsoo = response;
	//         $ionicLoading.hide();
	//     });

});
