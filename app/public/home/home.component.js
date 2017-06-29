(function() {
  "use strict";

  angular.module("app")
    .component("home", {
      controller: controller,
      templateUrl: '../home/home.template.html'
    });

  controller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    // vm.$onInit = function() {
    // }

    vm.loadItunes = () => $state.go('itunes');
    vm.loadSimon = () => $state.go('simon');
    vm.loadReactSimon = () => $state.go('reactsimon');
    vm.loadReddit = () => $state.go('reddit');
    vm.loadBwwmc = () => $state.go('bwwmc');

    vm.jumpToPortfolio = function() {
      // $('body,html')
      //   .animate({
      //     scrollTop: 700
      //     }, 800);
      let portfolio = $('#portfolioSection')
        .offset()
        .top - 120;
      console.log(portfolio);
      $('body')
        .animate({
          scrollTop: portfolio
        }, 800);
    }

    vm.jumpToAbout = function() {
      $('body')
        .animate({
          scrollTop: 1500
        }, 800);
    }
  }

}());
