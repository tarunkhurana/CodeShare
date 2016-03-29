'use strict';

angular
	.module('sportsaidWebsite')
	.directive('carousel', ['queryUrlParams', 'responsiveCarousel', '$timeout', '$window', function(queryUrlParams, responsiveCarousel, $timeout, $window){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){

				var
					carousel 	= $(element).find('.carousel'),
					mediaId 	= queryUrlParams('mediaId'),
					ratio 		= 440 / 780,
					breakpoints = [800, 1280],
					options 	= {
						initialSlide: 0,
						mobileFirst: true,
						responsive: [
							{
								breakpoint: breakpoints[0],
								settings: {
									slidesToShow: (parseInt(attrs.totalSlides, 10) > 1 || parseInt(attrs.totalSlides, 10) % 2 == 0 ? 2 : 1)
								}
							},
							{
								breakpoint: breakpoints[1],
								settings: {
									slidesToShow: (parseInt(attrs.totalSlides, 10) > 2 || parseInt(attrs.totalSlides, 10) % 3 == 0 ? 3 : (parseInt(attrs.totalSlides, 10) % 2 === 0 ? 2 : 1))
								}
							}
						],
						slidesToScroll: 1,
						slidesToShow: 1
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
		      		carousel.slick(options);
		      	}, 250);

		      	function responsiveIframes(){
		      		var
		      			columns = 3,
		      			iframes	= carousel[0].querySelectorAll('.iframe');
		      		if(iframes.length){
			      		if(window.innerWidth > breakpoints[0] && window.innerWidth < breakpoints[1]){
			      			columns = 2;
			      		}
			      		else if(window.innerWidth <= breakpoints[0]){
			      			columns = 1;
			      		}
		      			for(var i = 0, l = iframes.length; i < l; i++){
		      				iframes[i].querySelector('iframe').style.height = ratio * (document.body.clientWidth / columns) + 'px';
		      			}
		      		}
		      	}
			}
		};
	}]);
