// create the module and name it callKadavulAdmin
var callKadavulAdmin = angular.module('callKadavulAdmin', ['ngRoute','adminController']);

// configure our routes
callKadavulAdmin.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../index.html',
            controller  : 'adminLoginController'
        })
});



callKadavulAdmin.run(function ($rootScope) {
    $rootScope.final = "Distance is 0";
    $(document).ready(function(){
       // jQuery(".modal-trigger").leanModal();       
    }); 
});


