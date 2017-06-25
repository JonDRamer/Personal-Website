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

    // vm.$onInit = function() {
    // }

    vm.goHome = function() {
      $state.go('home');
    }

  }

}());
