var hostnameBuilderApp = angular.module('hostnameBuilderApp', []);

hostnameBuilderApp.controller('hostnameController', ['$scope', function($scope) {
    $scope.defaultName = 'example.com';
    $scope.hostname = $scope.defaultName;

    $scope.getHostname = function() {
        $scope.hostname = '';

        if ($scope.branch) {
            $scope.hostname += $scope.branch + '.';
        }

        if ($scope.username) {
            $scope.hostname += $scope.username + '.';
        }

        if ($scope.role) {
            $scope.hostname += $scope.role + '01.';
        }

        if ($scope.environment) {
            $scope.hostname += $scope.environment + '.';
        }

        if ($scope.domain) {
            $scope.hostname += $scope.domain;
        } else {
            $scope.hostname += $scope.defaultName;
        }

        return $scope.hostname;
    };

    $scope.onChange = function() {
        $scope.hostname = $scope.getHostname();
    };
}]);
