'use strict';

/* App Module */

var workListApp = angular.module('workListApp', [
  'ngRoute',

  'phonecatAnimations',
  'phonecatControllers',
  'phonecatServices'
]);

workListApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/apps', {
        templateUrl: 'res/partials/app-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/apps/:appId', {
        templateUrl: 'res/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/apps'
      });
  }]);
