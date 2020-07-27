(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var ctrlBuy = this;
      ctrlBuy.items = ShoppingListCheckOffService.getBuyItems;

      ctrlBuy.moveItem = ShoppingListCheckOffService.moveItem(itemName);
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var ctrlBot = this;
      ctrlBot.items = ShoppingListCheckOffService.getBotItems;

      ctrlBot.moveItem = ShoppingListCheckOffService.moveItem(itemName);
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var items = [
//0 = buy, 1 = bought
        {
          name: "cookies",
          quantity: 5,
          listState: 0
        },
        {
          name: "milk cartons",
          quantity: 5,
          listState: 0
        },
        {
          name: "apples",
          quantity: 10,
          listState: 0
        },
        {
          name: "oranges",
          quantity: 20,
          listState: 0
        },
        {
          name: "cakes",
          quantity: 100,
          listState: 0
        }
      ];

    service.moveItem = function (itemName) {
      for (var i = 0; i < items.length; i++){
        if (items[i].name == itemName){
          if (items[i].listState == 0){
            items[i].listState = 1;
          }else{
            items[i].listState = 0;
          }
        }
      }
    };

    service.getBuyItems = function () {
      var output = [];
      for (var i = 0; i < items.length; i++){
        if (items[i].name == itemName){
          if (items[i].listState == 0){
            output.push(items[i]);
          }
        }
      }
      return output;
    }

    service.getBotItems = function () {
      var output = [];
      for (var i = 0; i < items.length; i++){
        if (items[i].name == itemName){
          if (items[i].listState == 1){
            output.push(items[i]);
          }
        }
      }
      return output;
    }

  }
})();
