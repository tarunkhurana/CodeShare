'use strict';

angular
	.module('sportsaidWebsite')
	.directive('carouselWithCaption', ['queryUrlParams', 'responsiveCarousel', '$timeout', '$window', function(queryUrlParams, responsiveCarousel, $timeout, $window){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				var
					carousel 		= $(element).find('.carousel'),
					slideDataCache 	= {},
					slideData 		= JSON.parse(attrs.carouselWithCaption),
					mediaId 		= queryUrlParams('mediaId'),
					ratio 			= 440 / 780,
					options 		= {
						centerMode: false,
						centerPadding: '25%',
						initialSlide: 0,
						mobileFirst: true,
						responsive:[
							{
								breakpoint: 640,
								settings: {
									centerMode: (parseInt(attrs.totalSlides, 10) >= 3 ? true : false),
									centerPadding: (parseInt(attrs.totalSlides, 10) >= 3 ? '25%' : '0'),
									slidesToShow: 1
								}
							}
						],
						slidesToScroll: 1,
						slidesToShow: 1
					};

				scope.in = true;
				scope.totalSlides = slideData.totalSlides;

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
		      	carousel.on('init', function(slick){
					init();
					updateCaption(slick);
					scope.$watch('caption', function(n, o){
						if(n !== o){
							scope.in = true;
						}
					});
				})
				.on('beforeChange', function(){
					carousel.find('.slick-slide.in').removeClass('in');
					scope.in = false;
				})
				.on('afterChange', function(slick, index){
					updateCaption(slick, index);
				});

				/* SLICK INIT
				------------------------------------ */
				$timeout(function(){
		      		carousel.slick(options);
		      	}, 250);

				/* INIT CAPTION
				------------------------------------ */
				function init(){
					// build slideData cache
					for(var i = 0, l = slideData.slides.length; i < l; i++){
						slideDataCache['mediaId' + slideData.slides[i].mediaId] = {
							caption: slideData.slides[i].caption
						};
					}
					// responsive iframes
					responsiveIframes();
					angular.element($window).bind('resize', function(){
						responsiveIframes();
					});
				}

				function updateCaption(slick, index){
					var
						activeSlide 	= slick.currentTarget.querySelector('.slick-active'),
						cacheObj 		= slideDataCache['mediaId' + activeSlide.getAttribute('data-media-id')],
						currentSlide 	= (index === undefined) ? options.initialSlide + 1 : index.currentSlide + 1;
					scope.caption 		= cacheObj.caption;
					scope.slideCount 	= currentSlide;
					activeSlide.classList.add('in');
				}

				function responsiveIframes(){
		      		var
		      			columns = 2,
		      			iframes	= carousel[0].querySelectorAll('.iframe');
		      		if(iframes.length){
			      		if(window.innerWidth <= options.responsive[0].breakpoint){
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
