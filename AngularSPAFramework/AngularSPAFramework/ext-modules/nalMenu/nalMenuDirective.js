"use strict"
angular.module("nalMenu").directive("nalMenu", function () {
    return {
        //restrict: 'AE',
        transclude: true,

        scope: {
        },
        templateUrl: "ext-modules/nalMenu/nalMenuTemplate.html",
        controller: "nalMenuController",
        link: function (scope, el, attr) {

        }
    }
});