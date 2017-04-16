var myApp = angular.module('app', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/StaticPage/SocietyRegistration.html',
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

        .when('/SocietyRegistration', {
            templateUrl: 'StaticPage/SocietyRegistration.html',
            controller: 'homeController'
        })

        .when('/Lift1Certificate', {
            templateUrl: 'StaticPage/Lift1Certificate.html',
            controller: 'homeController'
        })

        .when('/Lift2Certificate', {
            templateUrl: 'StaticPage/Lift2Certificate.html',
            controller: 'homeController'
        })

        .when('/FireCertificate', {
            templateUrl: 'StaticPage/FireCertificate.html',
            controller: 'homeController'
        })

        .when('/CCTVProtectionSystem', {
            templateUrl: 'StaticPage/CCTVProtectionSystem.html',
            controller: 'homeController'
        })

        .when('/FireProtectionSystem', {
            templateUrl: 'StaticPage/FireProtectionSystem.html',
            controller: 'homeController'
        })

        .when('/PumpRoom', {
            templateUrl: 'StaticPage/PumpRoom.html',
            controller: 'homeController'
        })

        .when('/SolarWaterHeater', {
            templateUrl: 'StaticPage/SolarWaterHeater.html',
            controller: 'homeController'
        })

        .when('/LiftRoom', {
            templateUrl: 'StaticPage/LiftRoom.html',
            controller: 'homeController'
        })

        .when('/MeterCabin', {
            templateUrl: 'StaticPage/MeterCabin.html',
            controller: 'homeController'
        })

        .when('/LandRecord', {
            templateUrl: 'StaticPage/LandRecord.html',
            controller: 'homeController'
        })

        .when('/WaterRecord', {
            templateUrl: 'StaticPage/WaterRecord.html',
            controller: 'homeController'
        })

        .when('/ElectricityRecord', {
            templateUrl: 'StaticPage/ElectricityRecord.html',
            controller: 'homeController'
        })

        .when('/SocietyForms', {
            templateUrl: 'StaticPage/SocietyForms.html',
            controller: 'homeController'
        })


        .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
]);

myApp.controller('homeController', function() {

});