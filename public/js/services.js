'use strict';

var app = angular.module('myApp');


app.service('Item', function($http, $q) {

  this.getItems = () => {
    return $http.get('/items')
      .catch(err => {
        console.log(err);
      })
  };


  this.postItem = (itemObj) => {
    return $http.post('/items',itemObj)
      .catch(err => {
        console.log(err);
      });

  }


  this.deleteItem = (id) => {
    return $http.delete(`/items/${id}`)
      .catch(err => {
        console.log(err);
      });
  }

  this.editItem = (itemObj) => {
    return $http.put(`/items/${itemObj.id}`,itemObj)
      .catch(err => {
        console.log(err)
      });

  }



})

