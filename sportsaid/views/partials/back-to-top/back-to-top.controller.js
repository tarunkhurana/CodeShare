'use strict';

angular.module('sportsaidWebsite')
    .controller('backTopController', function() {
      $('#back').click(function(event) {
        event.preventDefault();
       $('html, body').animate({scrollTop: 0}, 1000);       
            
        });
    });
