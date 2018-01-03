var routerApp = angular.module('my-router', ['ui.router', 'movie_list', 'homeCT', ]);
routerApp.config(['$stateProvider', function(stateProvider) {
    stateProvider.state({
        name: "home",
        url: "/home",
        templateUrl: "./home/home.html",
        controller: "homeCtrl"
    })
    stateProvider.state({
        name: "top250",
        url: "/top250",
        templateUrl: "./top250/top250.html",
        // controller:""
    })
    stateProvider.state({
        name: "in_theaters",
        url: "/:movie_list/:page",
        templateUrl: "./movie_list/movie_list.html",
        controller: "movie_listCtrl"
    })
}])