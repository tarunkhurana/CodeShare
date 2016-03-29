/**
 * @description : This service includes the commonly used components
 * */
appModuleController.service('UtilityService', function() {
	var self = this;
	// store reference of service at the start

	/**
	 * @description : This function is used to return Boolean of matched activeBox
	 * */
	self.isActiveBox = function(current, group) {
		return current === group;
	};
	/**
	 * @description : This function is used to return Boolean of matched activeBox
	 * */
	self.showButtonBox = function(current, group) {
		return self.isActiveBox(current, group) ? null : group;
	};
	/**
	 * @description : This function is used to get the uid of loggedIn user
	 * */
	self.getUserInfo = function() {
		return {
			uName : localStorage.getItem('userName'),
			uid : localStorage.getItem("userUid")
		};
	};
}); 