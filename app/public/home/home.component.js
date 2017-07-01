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
      let portfolio = $('#portfolioSection')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: portfolio
        }, 800);
    }

    vm.jumpToAbout = function() {
      let aboutHeader = $('.aboutHeader')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: aboutHeader
        }, 800);
    }

    vm.jumpToFooter = function() {
      console.log("clicked");
      let footer = $('footer')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: footer
        }, 800);
    }
  }

}());
