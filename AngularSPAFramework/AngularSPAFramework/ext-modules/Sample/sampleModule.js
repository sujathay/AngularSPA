"use strict"

var sampleApp=angular.module("nalSample", []);
sampleApp.controller("nalSampleController", ['$scope',
    function ($scope) {

    }]
    );
sampleApp.directive("nalSample", function () {
    return {
        //restrict: 'AE',
        transclude: true,
        scope: {
        },
        templateUrl: "sample.html",
        controller: "nalSampleController",
        //templateUrl: "ext-modules/nalMenu/nalMenuTemplate.html" 
        link: function (scope, el, attr) {

        }
    }
});
sampleApp.config(function ($routeProvider) {
    $routeProvider.when(
    	'/sample',
    	{
    	    templateUrl: 'sample.html',
    	    controller: 'nalSampleController'
    	}); 
    $routeProvider.otherwise(
        {
            redirectTo: '/sample'
        });
});