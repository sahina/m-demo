var app = angular.module('m-demo', [
  'ui.router',
  'm-framework',
  'm-header'
]);

app.controller('MainCtrl', function ($scope) {
  console.log('hello');
});