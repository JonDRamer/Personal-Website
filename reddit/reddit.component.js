(function() {
  "use strict";

  angular.module("app")
    .component("reddit", {
      controller: controller,
      templateUrl: '../reddit/reddit.template.html'
    });

  controller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    vm.$onInit = () => {
      $('body,html')
        .animate({
          scrollTop: 0
        }, 0);
    }

    vm.goHome = () => $state.go('home');

    vm.jumpToDescription = (location) => {
      let description = $('main')
        .offset()
        .top;
      $('body')
        .animate({
          scrollTop: description
        }, 800);
      vm.toggleNav(location);
    }

    vm.toggleNav = function(location) {
      if (location === 'nav') {
        $('.sideNav')
          .toggleClass('sideNavActive');
      }
    }
  }

}());
