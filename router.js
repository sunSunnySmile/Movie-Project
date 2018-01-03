var routerApp = angular.module('my-router', ['ui.router']);
routerApp.config(['$stateProvider', function(stateProvider) {
    stateProvider.state({
        name: "home",
        url: "/home",
        templateUrl: "./home/home.html"
            // controller:""
    })
}])