appModuleController.service('interceptorFunction', function($http, $q) {
	var self = this;
	//*
	//* @description : This function is used to Record the user events
	// *

	self.recordFunction = function(data) {

		if (localStorage.getItem("functionTracking") != null) {
			var d = new Date();
			var temp = JSON.parse(localStorage.getItem("functionTracking"));
			temp.push({
				functionName : data,
				timeStamp : d
			});
			// console.log(temp);
			localStorage.setItem("functionTracking", JSON.stringify(temp));
		}
	};
});

