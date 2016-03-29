'use strict';

angular
	.module('sportsaidWebsite')
	.directive('carouselWithTags', ['queryUrlParams', 'responsiveCarousel', '$timeout', '$window', function(queryUrlParams, responsiveCarousel, $timeout, $window){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){

				var
					carousel 		= $(element).find('.carousel'),
					slideDataCache 	= {},
					slideData 		= JSON.parse(attrs.carouselWithTags),
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
					updateCaptionTags(slick);
				})
				.on('beforeChange', function(){
					carousel.find('.slick-slide.in').removeClass('in');
					scope.in = false;
				})
				.on('afterChange', function(slick){
					updateCaptionTags(slick);
				});

				/* SLICK INIT
				------------------------------------ */
				$timeout(function(){
		      		carousel.slick(options);
		      	}, 250);

				/* INIT CAPTION & TAGS JSON
				------------------------------------ */
				function init(){
					// build slideData cache
					for(var i = 0, l = slideData.length; i < l; i++){
						slideDataCache['mediaId' + slideData[i].mediaId] = {
							caption: slideData[i].caption,
							date: slideData[i].date,
							tags: []
						};
						for(var ii = 0, ll = slideData[i].tags.length; ii < ll; ii++){
							slideDataCache['mediaId' + slideData[i].mediaId].tags.push('<a href="' + slideData[i].tags[ii].tagUrl + '">' + slideData[i].tags[ii].tagName + '</a>');
						}
					}
					// responsive iframes
					responsiveIframes();
					angular.element($window).bind('resize', function(){
						responsiveIframes();
					});
				}

				function updateCaptionTags(slick){
					var
						activeSlide = slick.currentTarget.querySelector('.slick-active'),
						cacheObj 	= slideDataCache['mediaId' + activeSlide.getAttribute('data-media-id')];
					scope.caption 	= cacheObj.caption;
					scope.date 		= cacheObj.date;
					scope.tags 		= cacheObj.tags.join(', ');
					activeSlide.classList.add('in');
					scope.in = true;
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
