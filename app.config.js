(function() {
  "use strict";

  angular.module('app', ['ui.router'])
    .config(config);

  config.$inject = ["$stateProvider", "$urlServiceProvider", "$locationProvider"];

  function config($stateProvider, $urlServiceProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    });

    $stateProvider
      .state({
        name: 'home',
        url: '/Home',
        component: 'home'
      })
      .state({
        name: 'itunes',
        url: '/Guess-That-Song',
        component: 'itunes'
      })
      .state({
        name: 'simon',
        url: '/Simon',
        component: 'simon'
      })
      .state({
        name: 'reactsimon',
        url: '/React-Native-Simon',
        component: 'reactsimon'
      })
      .state({
        name: 'reddit',
        url: '/Reddit',
        component: 'reddit'
      })
      .state({
        name: 'bwwmc',
        url: '/BWWMC',
        component: 'bwwmc'
      })
      .state({
        name: 'capstone',
        url: '/Capstone',
        component: 'capstone'
      });
  }

}());
