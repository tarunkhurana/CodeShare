'use strict';

angular
	.module('sportsaidWebsite')
	.directive('carouselSingleItem', ['queryUrlParams', 'responsiveCarousel', '$timeout', '$window', function(queryUrlParams, responsiveCarousel, $timeout, $window){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				var
					carousel 	= $(element).find('.carousel'),
					mediaId 	= queryUrlParams('mediaId'),
					ratio 		= 440 / 780,
					options 	= {
						initialSlide: 0,
						mobileFirst: true,
						slidesToScroll: 1,
						slidesToShow: 1,
						adaptiveHeight: true
				};

				/* SET ACTIVE SLIDE FROM URL
				------------------------------------ */
				if(mediaId !== null && mediaId !== ''){
					var mediaItems = carousel[0].querySelectorAll('[data-media-id]');
					for(var i = 0, l = mediaItems.length; i < l; i++){
						if(mediaItems[i].getAttribute('data-media-id') === mediaId){
							options.initialSlide = i;
							break;
						}
					}
				}

				/* RESPONSIVE CAROUSEL ADJUSTMENTS
				------------------------------------ */
				responsiveCarousel(element);

		      	/* SLICK EVENTS
				------------------------------------ */
		      	carousel.on('init', function(){
					responsiveIframes();
					angular.element($window).bind('resize', function(){
						responsiveIframes();
					});
				});

		      	/* SLICK INIT
				------------------------------------ */                
				$timeout(function(){
                    //console.log(options);
		      		carousel.slick(options);
		      	}, 250);

		      	function responsiveIframes(){
		      		var
		      			columns = 1,
		      			iframes	= carousel[0].querySelectorAll('.iframe');
		      		if(iframes.length){
		      			for(var i = 0, l = iframes.length; i < l; i++){
		      				iframes[i].querySelector('iframe').style.height = ratio * (document.body.clientWidth / columns) + 'px';
		      			}
		      		}
		      	}
			}
		};
	}]);
