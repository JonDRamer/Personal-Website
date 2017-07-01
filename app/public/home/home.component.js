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
      let portfolio = $('main')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: portfolio
        }, 800);
    }

    vm.jumpToAbout = function() {
      let about = $('.about')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: about
        }, 800);
    }

    vm.jumpToFooter = function() {
      let footer = $('footer')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: footer
        }, 800);
    }

    vm.jumpToSkills = function() {
      let skills = $('.skills')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: skills
        }, 800);
    }
  }

}());
