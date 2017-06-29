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
  }

}());
