/**
 * todo : Need to do this using requireJS
 * */
appModuleController
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter, {
                            'event': event
                        });
                    });

                    event.preventDefault();
                }
            });
        };
    })


    .directive('selectNav', function ($rootScope) {
        return {
            restrict: 'AE',
            link: function (scope, elem, attrs) {
                $rootScope.$watch('stateName', function (newValue, oldValue) {
                    $('.navigation_top li').removeClass('active');
                    if (newValue !== null && newValue.match(/feed/g)) {
                        $('.navigation_top li').eq(0).addClass('active');
                    } else if (newValue !== null && newValue.match(/discover/g)) {
                        $('.navigation_top li').eq(1).addClass('active');
                    } else if (newValue !== null && newValue.match(/looks/g)) {
                        $('.navigation_top li').eq(2).addClass('active');
                    } else if (newValue !== null && newValue.match(/search/g)) {
                        $('.navigation_top li').eq(3).addClass('active');
                    }
                });
            }
        };
    })
    .directive('navClear', ['$ionicViewService', function ($ionicViewService) {
        return {
            restrict: 'AC',
            link: function ($scope, $element, $attr) {
                $element.bind('click', function () {
                    $ionicViewService.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    });
                });
            }
        };
    }])
    .directive('disableScreen', function () {
        return {
            restrict: 'E',
            link: function (scope, element) {
                scope.$watch(
                    function () {
                        return scope.sideMenuContentTranslateX;
                    },
                    function (translateVal) {
                        if (Math.abs(translateVal) === 275) {
                            !element.hasClass('display') && element.addClass('display');
                        } else {
                            element.hasClass('display') && element.removeClass('display');
                        }
                    });
            }
        };
    })
    .directive("visibleArea", function () {
        return {
            restrict: 'A',
            scope: {
                elements: "=",
                view: "="
            },
            link: function (scope, $element) {
                // Setting height in a global variable
                $element.on("click", function () {
                    var height = 0,
                        elements = scope.elements.split(",");
                    angular.forEach(elements, function (val, key) {
                        height += $(val).height();
                    });
                    setTimeout(function () {
                        $(scope.view).height($(window).height() - height + 10); //todo : this 10 is temporary
                    }, 100);
                });
            }
        }
    })
    .directive("serviceNotifier", function ($rootScope, $timeout) {
        return {
            restrict: "E",
            link: function (scope, $element, attr) {
                (function () {
                    var serviceEvt = $rootScope.$on("serviceMsg", function (event, msg) {
                        $element.html(msg).slideDown();
                        $timeout(function () {
                            $element.slideUp();
                        }, 2000);
                    });
                    scope.$on("destroy", serviceEvt);
                })();
            }
        }
    });
