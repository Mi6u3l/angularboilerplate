'use strict';

/**
 * @ngdoc overview
 * @name angularboilerplateApp
 * @description
 * # angularboilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularboilerplateApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
