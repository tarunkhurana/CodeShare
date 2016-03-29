'use strict';

angular.module('sportsaidWebsite')
    .controller('AmbassadorAjaxCtrl', ['$rootScope', '$scope', '$http', '$attrs', 'MODELS', 'loadMore', function ($rootScope, $scope, $http, $attrs, MODELS, loadMore) {

        var
            url,
            params      = JSON.parse($attrs.apiParams),
            skip        = parseInt(params.skip, 10),
            skipLength  = parseInt(params.length, 10),
            baseUrl     = $attrs.api,
            loadMoreBtn = document.getElementById('ambassador-load-more');

           $scope.ambassador = [];

        $scope.loadMore = function () {
                        
            if(!loadMore.isLoading(loadMoreBtn)){

                loadMore.start(loadMoreBtn);
                
                // build URL by concatenating $attrs
                url = baseUrl + 'length=' + skipLength + '&skip=' + skip;            

                $http
                    .get(url)
                    .then(function (res) {
                        if (res.status === 200) {
                            ambassadorAjaxSuccess(res.data);
                        } else if (res.status === 400) {
                            ambassadorAjaxError(res);
                        }
                    }, function (res) {
                        ambassadorAjaxError(res);
                    });
                }
        };

        function ambassadorAjaxSuccess(res) {
            for(var i in res.result){
                var model = new MODELS.ambassadors().result[0];
                model.name      = res.result[i].name;
                model.image_url = res.result[i].image_url;
                model.url = res.result[i].url;
                $scope.ambassador.push(model);
                
            }

            if(res.remaining === 0){
                loadMoreBtn.parentNode.removeChild(loadMoreBtn);
            } else {
                skip += parseInt(skipLength);
                loadMore.stop(loadMoreBtn);
            }            
        }        

        function ambassadorAjaxError() {
            $rootScope.notification('error', 'Error, please try again later.');   
            loadMore.stop(loadMoreBtn);         
        }  
        
        $scope.loadMore();
    }]);
