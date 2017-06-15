(function() {
  "use strict";

  angular.module("app")
    .component("home", {
      controller: controller,
      templateUrl: '../home/home.template.html'
    });

  function controller() {
    const vm = this;

    // vm.$onInit = function() {
    //
    // }

  }

}());
