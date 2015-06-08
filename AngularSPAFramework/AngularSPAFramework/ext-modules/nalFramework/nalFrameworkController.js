"use strict"

angular.module("nalFramework").controller("nalFrameworkController", ['$scope', 'nalService', function ($scope, nalService) {
    $scope.$on('nal-menu-item-selected-event', function (evt, data) {
        nalService.getEmployees(this, "http://localhost:35752/PatientService.svc/GetRule").success(function (user) {
            $scope.user = user;
        });
        $scope.routeString = data.route;
    });
}]);