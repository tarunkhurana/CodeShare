appModuleController
    .controller('editAddressCtrl', ['$rootScope', '$scope', '$timeout', '$state', '$ionicPopup', '$http', '$ionicLoading','$stateParams','CartService', function($rootScope, $scope, $timeout, $state, $ionicPopup, $http, $ionicLoading,$stateParams,cartService ) {
     alert($stateParams.profileId);

        /**
         * @description : This function add new addresses
         * */
        $scope.addAddress = function() {

            var addressData = JSON.stringify($scope.addressField);
           
            addressData = addressData.replace('{', '');
            addressData = addressData.replace('}', '');
            addressData = '[{"uid":"' + localStorage.getItem('userUid') + '",' + addressData + '}]';


            // addressData = '[{                    "uid": "1",                    "zip": "1204040",                    "address": "asdfsad",                    "email": "ja@ddd.com",                    "company": "prodigi",                    "name": "Jaikar",                    "state": "HR",                    "city": "fAtehana",                    "mobile": "989898989"                }]            ';

            // console.log(addressData);
            // $ionicLoading.show({
            //     content: 'Loading',
            //     animation: 'fade-in',
            //     showBackdrop: true,
            //     maxWidth: 200,
            //     showDelay: 0
            // });

            // $http.post(localStorage.getItem("dataServerName") + 'usercart/cart_action/add_shipping_info', addressData).then(function successCallback(response) {
            // $http.post(localStorage.getItem("dataServerName") + 'usercart/cart_action/add_billing_info', addressData).then(function successCallback(response) {
            //     // this callback will be called asynchronously
            //     // when the response is available
            //     $ionicLoading.hide();
            //     $scope.addressField = {};
            //     $state.go('app.address');
            // }, function errorCallback(response) {
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            // });
            $.ajax({
                type: 'POST',
                'contentType': 'application/json',
                url: localStorage.getItem("dataServerName") + 'usercart/cart_action/edit_customer_profile',
                data: addressData,
                processData: false,
            }).done(function(data) {
                $ionicLoading.hide();
                $scope.addressField = {};
                $state.go('app.address');

            });
        };

        /**
         * @description : This function is used to initialize the scope items to be used in the template
         * */
        var initScopeItems = function() {

        };



        var bindEvents = function() {
            // var addressItem = $scope.$watch(function() {
            //     return cartService.address;
            // }, function(nVal, oldVal) {
            //     $scope.addressField = cartService.address;
            // });

            // $scope.$on("destroy", addressItem);
        };


        var initScopeItems = function() {
            // $scope.itemsAddress = cartService.address;

            $scope.addressField.profile_id = $stateParams.profileId;
            $scope.addressField.name= $stateParams.name;
            $scope.addressField.email= $stateParams.email;
            $scope.addressField.company= $stateParams.company;
            $scope.addressField.mobile= $stateParams.mobile;
            $scope.addressField.state= $stateParams.state;
            $scope.addressField.city= $stateParams.city;
            $scope.addressField.address= $stateParams.address;
            $scope.addressField.zip= $stateParams.zip;

        };

        /**
         * @description : This function is used to call the functions to be used on pageLoad
         * */
        var pageLoad = function() {
            // bindEvents();
            $scope.addressField={};
            initScopeItems();
            // $scope.savedAddress();
        };


        pageLoad();

    }]);
