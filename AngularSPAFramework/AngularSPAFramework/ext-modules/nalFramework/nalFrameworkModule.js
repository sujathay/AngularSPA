"use strict"

var nalFramework = angular.module("nalFramework", ["nalMenu", "nalDashboard"]);

nalFramework.service('nalService', ['$http', function ($http) {
    this.getEmployees = function ($scope,url) {
        return $http({
            method: "GET",
            url: url,
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.employees = data;
            console.log(data);
        }).error(function (data) {
            console.log(data);
        });;
    };
}]);

