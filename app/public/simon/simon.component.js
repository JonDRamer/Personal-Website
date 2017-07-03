(function() {
  "use strict";

  angular.module("app")
    .component("simon", {
      controller: controller,
      templateUrl: '../simon/simon.template.html'
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

  }

}());
