(function () {
'use strict';

angular.module('public')
.controller('UserinfoController', UserinfoController);

UserinfoController.$inject = ['registrationData', 'ApiPath'];
function UserinfoController(registrationData, ApiPath) {
  var $ctrl = this;
  $ctrl.registrationData = registrationData;
  $ctrl.basePath= ApiPath;
}

})();
