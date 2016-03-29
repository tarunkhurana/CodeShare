'use strict';

angular.module('sportsaidWebsite')
	.directive('googleMap', function() {
		return {
	    	restrict: 'A',
	    	scope: {
	    		postcode: '@'
	    	},
	    	link: function (scope, element) {

	    		var
	    			center,
	    			geocoder = new google.maps.Geocoder();

	    		geocoder.geocode({'address': scope.postcode}, function(results, status){
	    			renderMap(results, status);
	    		});

	    		function renderMap(results, status){

	    			if(status === google.maps.GeocoderStatus.OK){
	    				
	    				var map = new google.maps.Map(element[0], {
	    					center: results[0].geometry.location,
						    scrollwheel: true,
						    mapTypeId: google.maps.MapTypeId.ROADMAP,
						    zoom: 17
	    				}),
	    				marker = new google.maps.Marker({
						    position: results[0].geometry.location,
						    map: map
						});
						google.maps.event.addDomListener(map, 'idle', function(){
							center = map.getCenter();
						});						
	    			}
	    			$(window).on('resize', function(){
						map.setCenter(center); 
					});
	    		}
	    	}
	  	};
	});