(function () {
'use strict';

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  service.registered = false;
  service.setRegistrationData = function (user) {
    service.user = user;
  };

  service.getRegistrationData = function () {
    return service.user;
  }
}
})();
