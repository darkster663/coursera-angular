(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
