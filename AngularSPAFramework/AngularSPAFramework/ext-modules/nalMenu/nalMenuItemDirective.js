"use strict"
angular.module("nalMenu").directive("nalMenuItem", function () {
    return {
        require: "^nalMenu",
        scope: {
            label: '@',
            route:'@'
        },
       // controller: "nalMenuItemController",
        templateUrl: "ext-modules/nalMenu/nalMenuItemTemplate.html",
        link: function (scope, el, attr,ctrl) {
            el.on("click", function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveItem(el);
                    ctrl.setActive(scope.route);
                });
            });
        }
    }
});