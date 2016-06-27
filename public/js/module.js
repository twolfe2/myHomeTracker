'use strict';


var app = angular.module('myApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl:'/html/home.html',
      controller: 'mainCtrl'
    })
    .state('addItem', {
      url: '/addItem',
      templateUrl: '/html/addItem.html',
      controller: 'addItemCtrl'
    })
    .state('items', {
      url:'/items',
      templateUrl:'/html/items.html',
      controller:'itemsCtrl'
    })
    .state('editItem', {
      url:'/editItem',
      templateUrl:'/html/edit.html',
      controller:'editCtrl',
      params: {item: null}
    })

    $urlRouterProvider.otherwise('/');
})