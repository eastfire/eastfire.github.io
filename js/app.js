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
      when('/phones', {
        templateUrl: 'res/partials/app-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'res/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
