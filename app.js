(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var ctrlBuy = this;

      ctrlBuy.items = ShoppingListCheckOffService.getBuyItems();
      //------------------
      ctrlBuy.moveTheItem = function (theItemIndex){
        ShoppingListCheckOffService.buyItem(theItemIndex);
        var buyItems = ShoppingListCheckOffService.getBuyItems();
        if (buyItems.length == 0){
          ctrlBuy.showE = true
        }
      }
    }
//-----------------------------------------------------------------------------------------------------------------------------
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var ctrlBot = this;

      ctrlBot.items = ShoppingListCheckOffService.getBotItems();
    }
//-------------------------------------------------------------------------------------------------------------------------------------------
    function ShoppingListCheckOffService() {
      var service = this;
      service.timestoBuyItemsCalled = 0;

      var toBuyItems = [
        { name: "cookies", quantity: 5 },
        { name: "milk cartons", quantity: 5 },
        { name: "apples", quantity: 10 },
        { name: "oranges", quantity: 20 },
        { name: "cakes", quantity: 100 }
      ];
      var botItems = [];

      service.getBuyItems = function () {
        return toBuyItems;
      }

      service.getBotItems = function () {
        return botItems;
      }
//--------------------------------------------------------------

    service.buyItem = function(itemIndex){
      console.log(itemIndex);
      botItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    }



  }
})();
