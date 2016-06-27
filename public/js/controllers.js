'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function($scope, $state) {
  // console.log('mainCtrl!');
});



app.controller('addItemCtrl', function($scope, $state, Item) {

  $scope.addItem = () => {

    Item.postItem($scope.newItem)
      .then(res => {
        // console.log(res.data);
        $state.go('items');
      });

  }



  // console.log('additemCtrl');

});



app.controller('itemsCtrl', function($scope, $state, Item,$filter) {
  // console.log('itemsCtrl');

  Item.getItems()
    .then(res => {
      $scope.items = res.data;
      // $scope.getTotal();
    });

    // var totals = $filter('sumFilter')($scope.items);
    // console.log(totals);
    // getTotal();
   $scope.getTotal = () => {
    let total = 0;

    if ($scope.items) {

      $scope.items.forEach((item) => {
        total += item.value;
      })
      $scope.total=total;
      return total;
      
    }
  }



  $scope.deleteItem = (id) =>{

    Item.deleteItem(id)
      .then(() => {
        $scope.items = $scope.items.filter((item) => {
          return item.id !== id;
        });
      });
    }



  $scope.editItem = (itemObj) => {

    // debugger;
    $state.go('editItem',{item: itemObj });



  }
});


app.controller('editCtrl', function($scope, $state, Item,$filter, $stateParams) {

  $scope.newItem= $stateParams.item;


  $scope.editItem = () => {

    Item.editItem($scope.newItem)
      .then((res) => {
        // console.log(res);
        $state.go('items');
      });
  }



});

 // app.filter('sumFilter', function() {
 //     return function(items) {
 //         var total = 0;
 //         for (let i=0; i<items.length; i++) {
 //             total = total + items[i].value;    
 //          };
 //         return total;
 //     };
 // });
