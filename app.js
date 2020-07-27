(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var ctrlBuy = this;

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var ctrlBot = this;

    }

    function ShoppingListCheckOffService() {
      var service = this;

      var items = [
        { name: "cookies", quantity: 5 },
        { name: "milk cartons", quantity: 5 },
        { name: "apples", quantity: 10 },
        { name: "oranges", quantity: 20 },
        { name: "cakes", quantity: 100 }
      ];

  }
})();
