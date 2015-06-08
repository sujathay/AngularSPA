"use strict"

angular.module("nalMenu").controller("nalMenuController", ['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.nalmenuController = 'dfdf';
    this.setActiveItem = function (el) {
        $scope.activeElement = el;
    };
    this.setActive = function (route) {
        $rootScope.$broadcast('nal-menu-item-selected-event', {
            route: route
        });
    };
}]);