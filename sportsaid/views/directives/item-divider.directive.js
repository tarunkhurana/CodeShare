'use strict';
angular.module('sportsaidWebsite')
	.directive('itemDivider',function(){    
		return {
		    restrict: 'A',		    
		    link: function (scope, element) {   		 
                //console.log($(element).prev());   	
		        if ($(element).prev().hasClass('module--single-item-module') || $(element).prev().hasClass('module--photo-video')) {		           
		            if (element.css('background-color') === 'rgb(255, 255, 255)' || element.css('background-color') === 'rgba(0, 0, 0, 0)'){
		                if ($(element).prev().css('background-color') === 'rgb(255, 255, 255)' || $(element).prev().css('background-color') === 'rgba(0, 0, 0, 0)') {
		                    element.before('<section class="module--divider-narrow"><div class="container-narrow"><div class="divider"></div></div></section>');
		                }
		            }
				}															
			}
		};
	});