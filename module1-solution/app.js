(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.message = "";
  $scope.checkLunch = function () {
    if ($scope.input) {
      var list = $scope.input.split(',');
      if (list.length > 3) {
        $scope.message = "Too much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    }
    else {
      $scope.message = "Please enter data first";
    }
  };
}
})();
