// Define the `person` module
var personApp = angular.module('personApp', []);

personApp.factory('personService', function() {
    var state = 'Resume';

    var person = {
        firstName: "Kris",
        lastName: "Wall"
    };

    var tabs = [{
        name: 'Resume',
        text: 'This is the resume'
    }, {
        name: 'Bio',
        text: 'This is the bio'
    }, {
        name: 'Projects',
        text: 'This is the projects'
    }, {
        name: 'Teams',
        text: 'This is the teams'
    }, {
        name: 'Events',
        text: 'This is the events'
    }, ];

    //  ---- Getters--------------------
    function getState() {
        return state;
    }

    function getName() {
        return person;
    }

		function getTabs() {
			return tabs;
		}

    // Setters ---------------------------
    function setState(newState) {
        state = newState;
    }

    // Factory returns -----------------------
    return {
        getState: getState,
        setState: setState,
        getName: getName,
				getTabs:getTabs
    }
});





// Define the `PersonController` controller on the `person` module
personApp.controller('smallNavController', function smallNavController($scope, personService) {
    $scope.$watch(function() {
        return personService.getState();
    }, function(value) {
        $scope.state = value;
        console.log('Local 1 ' + $scope.state);
    });

    $scope.setState = personService.setState;
		$scope.getTabs = personService.getTabs;
		$scope.tabs = $scope.getTabs();
		console.log('tabs:' + $scope.tabs);

});

personApp.controller('largeNavController', function largeNavController($scope, personService) {
    $scope.$watch(function() {
        return personService.getState();
    }, function(value) {
        $scope.state = value;
        console.log('Local 2 ' + $scope.state);
    });

		$scope.setState = personService.setState;
		$scope.getTabs = personService.getTabs;
		$scope.tabs = $scope.getTabs();
		console.log('tabs:' + $scope.tabs);
});

personApp.controller('dataViewController', function dataViewController($scope, personService) {
    $scope.$watch(function() {
        return personService.getState();
    }, function(value) {
        $scope.state = value;
        console.log('Local 3 ' + $scope.state);
    });

    
});
