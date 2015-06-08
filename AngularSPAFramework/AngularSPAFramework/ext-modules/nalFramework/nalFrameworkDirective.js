"use strict"

angular.module("nalFramework").directive("nalFramework", function () {
    return {
        transclude:true,
        scope: {
            title: '@',
            subtitle: '@' 
        },
        controller: "nalFrameworkController",
        templateUrl:"ext-modules/nalFramework/nalFrameworkTemplate.html"

    }
});