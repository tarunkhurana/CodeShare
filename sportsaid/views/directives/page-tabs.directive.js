'use strict';

angular.module('sportsaidWebsite')
	.directive('pageTabs', function() {
		return {
	    	restrict: 'A',
	    	link: function (scope, element) {
	    		element.find('.tab-header').on('click', 'a', function(e){
	    			e.preventDefault();
	    			var 
	    				tab = document.getElementById(e.currentTarget.getAttribute('href').substr(1)),
	    				tabs = e.currentTarget.parentNode.parentNode.children;	    				
	    			for(var i = 0, l = tabs.length; i < l; i++){
	    				var tabContent = document.getElementById(tabs[i].children[0].getAttribute('href').substr(1));
	    				tabs[i].children[0].className = tabs[i].children[0].className.replace(/active-tab/, '');
	    				tabContent.className = tabContent.className.replace(/active-tab-content/, '');
	    			}
	    			e.currentTarget.className = e.currentTarget.className + ' active-tab';
	    			tab.className = tab.className + ' active-tab-content';	
	    			$(this).trigger('active-tab');    			
	    		});
	    	}
	  	};
	});
