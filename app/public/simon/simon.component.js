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

    vm.goHome = () => $state.go('home');

    vm.$onInit = () => {
      $('body,html')
        .animate({
          scrollTop: 0
        }, 0);
    }
    
  }

}());
