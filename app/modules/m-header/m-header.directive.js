angular.module('m-header')
  .directive('mHeader', function () {

    var linker = function (el, attrs) {

    };

    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'app/modules/m-header/m-header.html',
      link: linker
    }

  });