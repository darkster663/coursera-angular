(function () {
'use strict';

angular.module('public')
.controller('SignupController', SignupController)


SignupController.$inject = ['ApiPath', '$http', 'SignupService', 'MenuService'];
function SignupController(ApiPath, $http, SignupService, MenuService) {
  var reg = this;
  reg.message = "";
  reg.submit = function() {
    return $http.get(ApiPath + '/menu_items/' + reg.user.dish + '.json')
    .then(function (response) {
      reg.completed = true;
      var promise = MenuService.getSingleItem(reg.user.dish);
      promise.then(function (response) {
        reg.user.dish_data = {
          short_name: response.short_name,
          name: response.name,
          description: response.description
        };
        console.log(reg.user.dish_data);
      });
      SignupService.setRegistrationData(reg.user);

    })
    .catch(function (error) {
      reg.message = "No such menu number exists.";
    });
  }
}

})();
