(function() {
  "use strict";

  angular.module("app")
    .component("resume", {
      controller: controller,
      templateUrl: '../resume/resume.template.html'
    });

  controller.$inject = ['$state'];

  function controller($state) {
    const vm = this;

    vm.$onInit = function() {
      $('body,html')
        .animate({
          scrollTop: 0
        }, 0);
    }

    vm.goHome = function() {
      $state.go('home');
    }

  }

}());
