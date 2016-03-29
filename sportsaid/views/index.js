'use strict';
angular.module('sportsaidWebsite', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'angucomplete-alt'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/pages/home/home.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/pages/about/about.html',
                controller: 'HomeCtrl'
            })
            .state('who-we-help', {
                url: '/who-we-help',
                templateUrl: 'views/pages/who-we-help/who-we-help.html',
                controller: 'HomeCtrl'
            })
            .state('ambassadors', {
                url: '/ambassadors',
                templateUrl: 'views/pages/ambassadors/ambassadors.html',
                controller: 'HomeCtrl'
            })
            .state('ambassador-profile', {
                url: '/ambassador-profile',
                templateUrl: 'views/pages/ambassador-profile/ambassador-profile.html',
                controller: 'HomeCtrl'
            })
            .state('who-we-work-with', {
                url: '/who-we-work-with',
                templateUrl: 'views/pages/who-we-work-with/who-we-work-with.html',
                controller: 'HomeCtrl'
            })
            .state('partners', {
                url: '/partners',
                templateUrl: 'views/pages/partners/partners.html',
                controller: 'HomeCtrl'
            })
            .state('partner-profile', {
                url: '/partner-profile',
                templateUrl: 'views/pages/partner-profile/partner-profile.html',
                controller: 'HomeCtrl'
            })
            .state('patron', {
                url: '/patron',
                templateUrl: 'views/pages/patron/patron.html',
                controller: 'HomeCtrl'
            })
            .state('meet-the-team', {
                url: '/meet-the-team',
                templateUrl: 'views/pages/meet-the-team/meet-the-team.html',
                controller: 'HomeCtrl'
            })
            .state('trustees', {
                url: '/trustees',
                templateUrl: 'views/pages/trustees/trustees.html',
                controller: 'HomeCtrl'
            })
            .state('other-teams-across-the-uk', {
                url: '/other-teams-across-the-uk',
                templateUrl: 'views/pages/other-teams-across-the-uk/other-teams-across-the-uk.html',
                controller: 'HomeCtrl'
            })
            .state('other-teams-detail', {
                url: '/other-teams-detail',
                templateUrl: 'views/pages/other-teams-detail/other-teams-detail.html',
                controller: 'HomeCtrl'
            })
            .state('campaigns', {
                url: '/campaigns',
                templateUrl: 'views/pages/campaigns/campaigns.html',
                controller: 'HomeCtrl'
            })
            .state('campaign-detail', {
                url: '/campaign-detail',
                templateUrl: 'views/pages/campaign-detail/campaign-detail.html',
                controller: 'HomeCtrl'
            })
            .state('governance', {
                url: '/governance',
                templateUrl: 'views/pages/governance/governance.html',
                controller: 'HomeCtrl'
            })
            .state('get-involved', {
                url: '/get-involved',
                templateUrl: 'views/pages/get-involved/get-involved.html',
                controller: 'HomeCtrl'
            })
            .state('partnership', {
                url: '/partnership',
                templateUrl: 'views/pages/partnership/partnership.html',
                controller: 'HomeCtrl'
            })
            .state('membership', {
                url: '/membership',
                templateUrl: 'views/pages/membership/membership.html',
                controller: 'HomeCtrl'
            })
            .state('donate', {
                url: '/donate',
                templateUrl: 'views/pages/donate/donate.html',
                controller: 'HomeCtrl'
            })
            .state('fundraising', {
                url: '/fundraising',
                templateUrl: 'views/pages/fundraising/fundraising.html',
                controller: 'HomeCtrl'
            })
            .state('recycling', {
                url: '/recycling',
                templateUrl: 'views/pages/recycling/recycling.html',
                controller: 'HomeCtrl'
            })
            .state('resources', {
                url: '/resources',
                templateUrl: 'views/pages/resources/resources.html',
                controller: 'HomeCtrl'
            })
            .state('athletes', {
                url: '/athletes',
                templateUrl: 'views/pages/athletes/athletes.html',
                controller: 'HomeCtrl'
            })
            .state('our-athletes', {
                url: '/our-athletes',
                templateUrl: 'views/pages/our-athletes/our-athletes.html',
                params:      {'q': ''},
                controller: 'HomeCtrl'
            })
            .state('athlete-profile', {
                url: '/athlete-profile',
                templateUrl: 'views/pages/athlete-profile/athlete-profile.html',
                controller: 'HomeCtrl'
            })
            .state('athlete-profile-look-up', {
                url: '/athlete-profile-look-up',
                templateUrl: 'views/pages/athlete-profile-look-up/athlete-profile-look-up.html',
                controller: 'HomeCtrl'
            })
            .state('sports-we-support', {
                url: '/sports-we-support',
                templateUrl: 'views/pages/sports-we-support/sports-we-support.html',
                controller: 'HomeCtrl'
            })
            .state('sport-profile', {
                url: '/sport-profile',
                templateUrl: 'views/pages/sport-profile/sport-profile.html',
                controller: 'HomeCtrl'
            })
            .state('competitions', {
                url: '/competitions',
                templateUrl: 'views/pages/competitions/competitions.html',
                controller: 'HomeCtrl'
            })
            .state('competition-detail', {
                url: '/competition-detail',
                templateUrl: 'views/pages/competition-detail/competition-detail.html',
                controller: 'HomeCtrl'
            })
            .state('our-alumni', {
                url: '/our-alumni',
                templateUrl: 'views/pages/our-alumni/our-alumni.html',
                controller: 'HomeCtrl'
            })
            .state('alumni-profile', {
                url: '/alumni-profile',
                templateUrl: 'views/pages/alumni-profile/alumni-profile.html',
                controller: 'HomeCtrl'
            })
            .state('info-for-parents', {
                url: '/info-for-parents',
                templateUrl: 'views/pages/info-for-parents/info-for-parents.html',
                controller: 'HomeCtrl'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'views/pages/news/news.html',
                controller: 'HomeCtrl'
            })
            .state('news-details', {
                url: '/news-details',
                templateUrl: 'views/pages/news-details/news-details.html',
                controller: 'HomeCtrl'
            })
            .state('news-details-with-headline-and-sub-headlines', {
                url: '/news-details-with-headline-and-sub-headlines',
                templateUrl: 'views/pages/news-details-with-headline-and-sub-headlines/news-details-with-headline-and-sub-headlines.html',
                controller: 'HomeCtrl'
            })
            .state('news-archive', {
                url: '/news-archive',
                templateUrl: 'views/pages/news-archive/news-archive.html',
                controller: 'HomeCtrl'
            })
            .state('tag-archive', {
                url: '/tag-archive',
                templateUrl: 'views/pages/tag-archive/tag-archive.html',
                controller: 'HomeCtrl'
            })
            .state('press-room', {
                url: '/press-room',
                templateUrl: 'views/pages/press-room/press-room.html',
                controller: 'HomeCtrl'
            })
            .state('press-room-detail', {
                url: '/press-room-detail',
                templateUrl: 'views/pages/press-room-detail/press-room-detail.html',
                controller: 'HomeCtrl'
            })
            .state('images-and-video', {
                url: '/images-and-video',
                templateUrl: 'views/pages/images-and-video/images-and-video.html',
                controller: 'HomeCtrl'
            })
            .state('image-set', {
                url: '/image-set',
                templateUrl: 'views/pages/image-set/image-set.html',
                controller: 'HomeCtrl'
            })
            .state('image-video-detail', {
                url: '/image-video-detail',
                templateUrl: 'views/pages/image-video-detail/image-video-detail.html',
                controller: 'HomeCtrl'
            })
            .state('video-detail', {
                url: '/video-detail',
                templateUrl: 'views/pages/video-detail/video-detail.html',
                controller: 'HomeCtrl'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'views/pages/events/events.html',
                controller: 'HomeCtrl'
            })
            .state('events-details', {
                url: '/events-details',
                templateUrl: 'views/pages/events-details/events-details.html',
                controller: 'HomeCtrl'
            })
            .state('event-archive', {
                url: '/event-archive',
                templateUrl: 'views/pages/event-archive/event-archive.html',
                controller: 'HomeCtrl'
            })
            .state('newsletter', {
                url: '/newsletter',
                templateUrl: 'views/pages/newsletter/newsletter.html',
                controller: 'HomeCtrl'
            })
            .state('newsletter-template', {
                url: '/newsletter-template',
                templateUrl: 'views/pages/newsletter-template/newsletter-template.html',
                controller: 'HomeCtrl'
            })
            .state('newsletter-confirmation', {
                url: '/newsletter-confirmation',
                templateUrl: 'views/pages/newsletter-confirmation/newsletter-confirmation.html',
                controller: 'HomeCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/pages/contact/contact.html',
                controller: 'HomeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/pages/login/login.html',
                controller: 'HomeCtrl'
            })
            .state('privacy-policy', {
                url: '/privacy-policy',
                templateUrl: 'views/pages/privacy-policy/privacy-policy.html',
                controller: 'HomeCtrl'
            })
            .state('terms-and-conditions', {
                url: '/terms-and-conditions',
                templateUrl: 'views/pages/terms-and-conditions/terms-and-conditions.html',
                controller: 'HomeCtrl'
            })
            .state('cookies', {
                url: '/cookies',
                templateUrl: 'views/pages/cookies/cookies.html',
                controller: 'HomeCtrl'
            })
            .state('single-items', {
                url: '/single-items',
                templateUrl: 'views/pages/single-items/single-items.html',
                controller: 'HomeCtrl'
            })
            .state('search-results', {
                url: '/search-results',
                templateUrl: 'views/pages/search-results/search-results.html',
                controller: 'HomeCtrl'
            })
            .state('useful-resources', {
                url: '/useful-resources',
                templateUrl: 'views/pages/useful-resources/useful-resources.html',
                controller: 'HomeCtrl'
            })
            .state('carousels', {
                url: '/carousels',
                templateUrl: 'views/pages/carousels/carousels.html',
                controller: 'HomeCtrl'
            });
        $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope, $timeout){

        // global notifications
        $rootScope.notification = function(type, msg){

            var existingNotification = document.getElementById('notification');

            if(existingNotification !== null){
                existingNotification.parentNode.removeChild(existingNotification);
            }

            var notification = document.createElement('div');

            switch(type){
                case 'success':
                    notification.className = 'success';
                    break;
                case 'error':
                    notification.className = 'error';
                    break;
                default:
                    notification.className = 'error';
            }

            notification.id = 'notification';
            notification.innerHTML = msg;

            document.body.appendChild(notification);

            var currentNotification = document.getElementById('notification');
            currentNotification.offsetWidth = currentNotification.offsetWidth;
            currentNotification.className = currentNotification.className + ' in';

            $timeout(function(){
                if(document.getElementById('notification') !== null){
                    document.body.removeChild(document.getElementById('notification'));
                }
            }, 5000);
        };

    }).constant('GOOGLE_API_KEY', 'AIzaSyDY7_tKbdJE96Y3ihM061rZdm8O6Sxgh_s');//google api key to fetch youtube videos

