angular.module('m-header')
  .directive('mHeaderItem', function () {

    var linker = function (el, attrs) {

    };

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/modules/m-header/m-header-item.html',
      link: linker
    }

  });