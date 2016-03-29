/**
 * todo : Need to do this using requireJS
 * */
appModuleController.filter('renderHTMLCorrectly', function() {
	return function(stringToParse) {
		// return $scope.trustAsHtml(stringToParse);
		return stringToParse.toUpperCase();
	};
}).filter('checkStock', function() {

	return function(stringToParse) {
		// return $scope.trustAsHtml(stringToParse);
		var showText = parseInt(stringToParse);
		if (showText < 6) {
			showText = showText + ' Left';
		}
		return showText;
	};
}).filter('currency', function() {
	return function(input, type) {
		var currency = typeof type !== "undefined" ? type : "₹ ";
		return currency + " " + input;
	};
}).filter('integer', function() {
	return function(input, type) {
		return parseInt(input);
	};
});
