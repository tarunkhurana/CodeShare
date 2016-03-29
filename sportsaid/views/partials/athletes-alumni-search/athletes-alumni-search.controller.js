'use strict';

angular.module('sportsaidWebsite')
    .controller('AthletesAlumniSearchCtrl',
    	['$rootScope', '$scope', '$http', '$attrs', '$location', '$timeout', 'loadMore',
    		function ($rootScope, $scope, $http, $attrs, $location, $timeout, loadMore) {

		/* VARS
		-------------------------------- */
		var
			url,
			baseUrl 		= $attrs.api,
			apiParams		= JSON.parse($attrs.apiParams),
			skipLength		= parseInt(apiParams.length),
			skipCount 		= 0,
			loadmoreBtn		= document.getElementById('load-more-btn'),
			selectBoxes 	= document.querySelectorAll('.chosen-select'),
			athletesPage 	= false;

		/* ATHLETES OR ALUMNI PAGE
		-------------------------------- */
		if(document.querySelectorAll('[name="region"]').length && document.querySelectorAll('[name="partner"]').length){
			athletesPage = true;
			$scope.regionItems = [];
			$scope.partnerItems = [];
		}

    	/* SCOPES
		-------------------------------- */
		$scope.reveal 				= false;
		$scope.filterText			= 'Show filters';
		$scope.results 				= [];
		$scope.resultsRemaining 	= 1;
		$scope.sportItems  			= [];
            $scope.queryparameters = {
              sport: false,
              region: false,
              partner: false
            }; // Track if we set scope from a query parameter (attempt to set in parseURL)

		/* PARSE QUERY PARAMETERS
		-------------------------------- */
		function getParameterByName(name) {
		    var match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}

		function parseURL() {
			// query name
		    if(getParameterByName('q') === '' || getParameterByName('q') === null) {
	            $scope.q = '';
	        } else {
	            $scope.q = getParameterByName('q');
	        }
	        // query sport
		    if(getParameterByName('sport') === '' || getParameterByName('sport') === null) {
	            $scope.sport = 0;
	        } else {
	            $scope.sport = getParameterByName('sport');
                  $scope.queryparameters.sport = true;
	        }
		    if (athletesPage) {
		        // query region
		        if (getParameterByName('region') === '' || getParameterByName('region') === null) {
		            $scope.region = 0;
		        } else {
		            $scope.region = getParameterByName('region');
                        $scope.queryparameters.region = true;
		        }
		        // query partner
		        if (getParameterByName('partner') === '' || getParameterByName('partner') === null) {
		            $scope.partner = 0;
		        } else {
		            $scope.partner = getParameterByName('partner');
                        $scope.queryparameters.partner = true;
		        }
		    }
		}

		$scope.$on('enter', function() {
		    $scope.submitSearch();
		});

    	/* AUTOCOMPLETE
		-------------------------------- */
		$scope.autocompleteChange = function(e){
			$scope.q = e;
		};

		$scope.autocompleteSelect = function(e){
			if(e !== undefined){
				$scope.q = e.title;
			}
		};

		$scope.submitSearch = function(){

			skipCount = 0;
			$scope.sport = 0;
			if(athletesPage){
				$scope.region = 0;
				$scope.partner = 0;
			}
			$scope.results = [];
			$scope.fullSearch();
		};

		/* SEARCH
		-------------------------------- */
		$scope.fullSearch = function(){

			// proceed only if we're not already loading
			if(!loadMore.isLoading(loadmoreBtn)){

				loadMore.start(loadmoreBtn);

				url = [baseUrl, 'q=', $scope.q, '&skip=', skipCount, '&length=', skipLength, '&sport=', $scope.sport].join('');

				if(athletesPage){
					url += '&region=' + $scope.region + '&partner=' + $scope.partner;
				}

				$http
					.get(url)
					.then(function(res){
						if(res.status === 200){
							fullSearchSuccess(res.data);
						} else if(res.status === 400){
							fullSearchError(res);
						}
					}, function(res){
						fullSearchError(res);
					});
			}
		};

		function fullSearchSuccess(res){

			if(skipCount !== 0){
				$scope.results =  $scope.results.concat(res.results);
			} else {
				$scope.results = res.results;
			}

			$scope.resultsRemaining = res.remaining;
			$scope.updateFilters(res);
			loadMore.stop(loadmoreBtn);
		}

		function fullSearchError(){
			$rootScope.notification('error', 'Error, please try again later.');
			loadMore.stop(loadmoreBtn);
		}

		/* FILTERS
		-------------------------------- */
		$scope.revealFilter = function() {
    		$scope.reveal = !$scope.reveal;
    		$scope.filterText = $scope.reveal ? 'Hide filters' : 'Show filters';
  		};

  		$scope.updateFilters = function(res){
			if(parseInt($scope.sport) === 0 || $scope.queryparameters.sport){
				$scope.sportItems = res.filters.sport;

                        // If there is a query parameter, make sure we set value of the <select> element
                        if ($scope.queryparameters.sport) {
                          $timeout(function(){
                            $(selectBoxes).filter('*[name="sport"]').val($scope.sport);
                          });
                        }
			}
			if(athletesPage){

				if(parseInt($scope.region) === 0  || $scope.queryparameters.region){
					$scope.regionItems = res.filters.region;

                              if ($scope.queryparameters.region) {
                                $timeout(function(){
                                  $(selectBoxes).filter('*[name="region"]').val($scope.region);
                                });
                              }
				}

				if(parseInt($scope.partner) === 0 || $scope.queryparameters.partner){
					$scope.partnerItems = res.filters.partner;

                              if ($scope.queryparameters.partner) {
                                $timeout(function(){
                                  $(selectBoxes).filter('*[name="partner"]').val($scope.partner);
                                });
                              }
				}
			}

			$timeout(function(){
				for(var i = 0, l = selectBoxes.length; i < l; i++){
					$(selectBoxes[i]).prop('disabled', false).trigger('chosen:updated');
				}
			}, 500);
		};

  		$scope.submitFilter = function(){
  			skipCount = 0;
  			$scope.results = [];
  			$timeout(function(){
              $scope.fullSearch();
  			}, 100);
  		};

		/* LOAD MORE
		-------------------------------- */
		$scope.loadMore = function(e){
			e.preventDefault();
			skipCount = parseInt(skipCount) + parseInt(skipLength);
			$scope.fullSearch();
		};

		/* RESET
		-------------------------------- */
		$scope.reset = function(){
			window.location = window.location.protocol + '//' + window.location.host + window.location.pathname;
		};

		/* PAGE INIT
		-------------------------------- */
		parseURL();
		$scope.fullSearch();

	}]);
