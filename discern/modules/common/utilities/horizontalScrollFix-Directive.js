appModuleController.directive('horizontalScrollFix', ['$timeout', '$ionicScrollDelegate',
function($timeout, $ionicScrollDelegate) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var mainScrollID = attrs.horizontalScrollFix,
			    scrollID = attrs.delegateHandle;

			var getEventTouches = function(e) {
				return e.touches && (e.touches.length ? e.touches : [{
					pageX : e.pageX,
					pageY : e.pageY
				}]);
			};

			var fixHorizontalAndVerticalScroll = function() {
				var mainScroll,
				    scroll;
				mainScroll = $ionicScrollDelegate.$getByHandle(mainScrollID).getScrollView();
				scroll = $ionicScrollDelegate.$getByHandle(scrollID).getScrollView();

				// patch touchstart
				scroll.__container.removeEventListener('touchstart', scroll.touchStart);
				scroll.touchStart = function(e) {
					var startY;
					scroll.startCoordinates = ionic.tap.pointerCoord(e);
					if (ionic.tap.ignoreScrollStart(e)) {
						return;
					}
					scroll.__isDown = true;
					if (ionic.tap.containsOrIsTextInput(e.target) || e.target.tagName === 'SELECT') {
						scroll.__hasStarted = false;
						return;
					}
					scroll.__isSelectable = true;
					scroll.__enableScrollY = true;
					scroll.__hasStarted = true;
					scroll.doTouchStart(getEventTouches(e), e.timeStamp);
					startY = mainScroll.__scrollTop;

					// below is our changes to this method
					// e.preventDefault();

					// lock main scroll if scrolling horizontal
					$timeout((function() {
						var animate,
						    yMovement;
						yMovement = startY - mainScroll.__scrollTop;
						if (scroll.__isDragging && yMovement < 2.0 && yMovement > -2.0) {
							mainScroll.__isTracking = false;
							mainScroll.doTouchEnd();
							animate = false;
							return mainScroll.scrollTo(0, startY, animate);
						} else {
							return scroll.doTouchEnd();
						}
					}), 100);
				};
				scroll.__container.addEventListener('touchstart', scroll.touchStart);
			};
			$timeout(function() {
				fixHorizontalAndVerticalScroll();
			});

			var delegateHandler = function() {
				//return false; // <--- comment this to "fix" the problem
				var sv = $ionicScrollDelegate.$getByHandle(scrollID).getScrollView();

				var container = sv.__container;

				var originaltouchStart = sv.touchStart;
				var originalmouseDown = sv.mouseDown;
				var originaltouchMove = sv.touchMove;
				var originalmouseMove = sv.mouseMove;

				container.removeEventListener('touchstart', sv.touchStart);
				container.removeEventListener('mousedown', sv.mouseDown);
				document.removeEventListener('touchmove', sv.touchMove);
				document.removeEventListener('mousemove', sv.mousemove);

				sv.touchStart = function(e) {
					e.preventDefault = function() {
					}
					if ( typeof originaltouchStart !== "undefined")
						originaltouchStart.apply(sv, [e]);
				}

				sv.touchMove = function(e) {
					e.preventDefault = function() {
					}
					if ( typeof originaltouchMove !== "undefined")
						originaltouchMove.apply(sv, [e]);
				}

				sv.mouseDown = function(e) {
					e.preventDefault = function() {
					}
					if ( typeof originalmouseDown !== "undefined")
						originalmouseDown.apply(sv, [e]);
				}

				sv.mouseMove = function(e) {
					e.preventDefault = function() {
					};
					if ( typeof originalmouseMove !== "undefined")
						originalmouseMove.apply(sv, [e]);
				};

				container.addEventListener("touchstart", sv.touchStart, false);
				container.addEventListener("mousedown", sv.mouseDown, false);
				document.addEventListener("touchmove", sv.touchMove, false);
				document.addEventListener("mousemove", sv.mouseMove, false);
			};
			delegateHandler();
		}
	};

}]);
