'use strict';

/**
 * @ngdoc overview
 * @name kinnonteawApp
 * @description
 * # kinnonteawApp
 *
 * Main module of the application.
 */
angular
  .module('kinnonteawApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'CONFIG',
    'textAngular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/poiview/:poiId?', {
        templateUrl: 'views/poiview.html',
        controller: 'PoiViewCtrl'
      })
      .when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
