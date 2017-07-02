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

    vm.loadItunes = () => $state.go('itunes');
    vm.loadSimon = () => $state.go('simon');
    vm.loadReactSimon = () => $state.go('reactsimon');
    vm.loadReddit = () => $state.go('reddit');
    vm.loadBwwmc = () => $state.go('bwwmc');

    vm.jumpToPortfolio = (location) => {
      let portfolio = $('main')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: portfolio
        }, 800);
      vm.toggleNav(location);
    }

    vm.jumpToAbout = (location) => {
      let about = $('.about')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: about
        }, 1000);
      vm.toggleNav(location);
    }


    vm.jumpToSkills = (location) => {
      let skills = $('.skills')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: skills
        }, 1200);
      vm.toggleNav(location);
    }
    vm.jumpToContact = (location) => {
      let contact = $('.chat')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: contact
        }, 1400);
      vm.toggleNav(location);
    }

    vm.toggleNav = function(location) {
      console.log(location);
      if (location === 'nav') {
        $('.sideNav')
          .toggleClass('sideNavActive');
      }
    }
  }

}());;
