var myApp = angular.module('app', []);

myApp.config([function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'index.html',
            controller: 'homeController'
        })
        .when('/ApprovedPlan1', {
            templateUrl: 'StaticPage/ApprovedPlan1.html',
            controller: 'homeController'
        })
        .when('/ApprovedPlan2', {
            templateUrl: 'StaticPage/ApprovedPlan2.html',
            controller: 'homeController'
        })
        .when('/CommencementCertificate', {
            templateUrl: 'StaticPage/CommencementCertificate.html',
            controller: 'homeController'
        })
        .when('/CompletionCertificate', {
            templateUrl: 'StaticPage/CompletionCertificate.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);