'use strict';

angular.module('sportsaidWebsite')
	.directive('youtubevideos',['youtubeService', function(youtubeService) {
    //Youtube Directive
		return {
	    	restrict: 'E',
	    	link: function (scope, element,attrs) {
                //Youtube service to get recent videos
                youtubeService.getRecentVideos(attrs.channelid,attrs.maxvideos).success(function(data){
                  var elementdata='';
                  
                  angular.forEach(data.items, function(item, index){
                  	if(index%2===0){
                     elementdata+='<div class="row grey-row"><figure><a target="_blank" href="https://www.youtube.com/watch?v='+item.id.videoId+'"><img src="'+ item.snippet.thumbnails.medium.url+'"><span class="playbtn"><img src="/assets/SportsAid.assets/images/icons/play-button.png"></span></a></figure></div>';
                  	}
                  	else
                  	{
                     elementdata+='<div class="row light-grey-row"><figure><a target="_blank" href="https://www.youtube.com/watch?v='+item.id.videoId+'"><img src="' + item.snippet.thumbnails.medium.url+'"><span class="playbtn"><img src="/assets/SportsAid.assets/images/icons/play-button.png"></span></a></figure></div>';                 	}
                  });

                  $(element).html(elementdata);
                });
	    	}
	  	};
	}]).directive('twitterfeeds', function() {
    //Twitter-Feeds Directive
		return {
	    	restrict: 'E',
	    	template:'<div id="twitterfeeds"></div>',
        scope:{
              user : '=user',
              widgetid:'=widgetid',
              tweetlimit:'=tweetlimit'
        },
        link:function($scope){
          //console.log(window.twttr);
          window.twttr.ready(
          function (twttr) {
            // bind events here
             //console.log('loaded');
             twttr.widgets.createTimeline(
             $scope.widgetid,
            document.getElementById('twitterfeeds'),
            {

              related: 'twitterdev,twitterapi',
              screenName:$scope.user,
              tweetLimit:$scope.tweetlimit,
              chrome:'noheader, nofooter'
             }).then(function () {
            //console.log("Embedded a timeline.")
          });
          }
         );

        }

	  	};
	}).directive('facebookposts', function() {
    //Facebook-Posts Directive
    return {
        restrict: 'E',
        template:'<div class="fb-page" data-href="https://www.facebook.com/{{user}}"  data-small-header="false" data-width="100%" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/{{user}}"><a href="https://www.facebook.com/{{user}}"></a></blockquote></div></div>',
        scope:{
              user : '=user'
        }
      };
  });
