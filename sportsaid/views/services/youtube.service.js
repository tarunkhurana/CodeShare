'use strict';

angular.module('sportsaidWebsite')
	.service('youtubeService',function($http,GOOGLE_API_KEY){
		// Use this function to get recent videos
	     this.getRecentVideos=function(channelid,maxvideos){
         return $http.get('https://www.googleapis.com/youtube/v3/search?key='+GOOGLE_API_KEY+'&channelId='+channelid+'&part=snippet&maxResults='+maxvideos);
       };

	});
