var routerApp = angular.module('my-router', ['ui.router', 'in_theaters', 'homeCT']);
routerApp.config(['$stateProvider', function(stateProvider) {
    stateProvider.state({
        name: "home",
        url: "/home",
        templateUrl: "./home/home.html",
        controller: "homeCtrl"
    })
    stateProvider.state({
        name: "comming_soon",
        url: "/comming_soon",
        templateUrl: "./comming_soon/comming_soon.html",
        // controller:""
    })
    stateProvider.state({
        name: "top250",
        url: "/top250",
        templateUrl: "./top250/top250.html",
        // controller:""
    })
    stateProvider.state({
        name: "in_theaters",
        // url: "/in_theaters",//路径跳转格式
        url: "/in_theaters/:page",
        templateUrl: "./in_theaters/in_theaters.html",
        controller: "in_theatersCtrl"
    })
}])