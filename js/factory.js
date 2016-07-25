var testApp = angular.module('testApp', []);

testApp.factory('service', function() {
    var state = 'A';

    function getState() {
        return state;
    }

		function setState(newState) {
			state = newState;
		}

    return {
        getState: getState,
				setState: setState
    }
});




testApp.controller('firstCtrl', function firstCtrl($scope, service) {
    // $scope.state = service.state;
    $scope.$watch(function() {
        return service.getState();
    }, function(value) {
        $scope.state = value;
        console.log('Local 1 ' + $scope.state);
    });

		$scope.setState = service.setState;
});

testApp.controller('secondCtrl', function secondCtrl($scope, service) {
    $scope.$watch(function() {
        return service.getState();
    }, function(value) {
        $scope.state = value;
        console.log('Local 2 ' + $scope.state);
    });

		$scope.setState = service.setState;
});

testApp.controller('thirdCtrl', function thirdCtrl($scope, service) {
    $scope.$watch(function() {
        return service.getState();
    }, function(value) {
        $scope.state = value;
        console.log('Local 3 ' + $scope.state);
    });

		$scope.setState = service.setState;
});
