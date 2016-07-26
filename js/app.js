// Define the `person` module
var personApp = angular.module('personApp', []);

personApp.factory('personService', function() {
    var state = 'Resume';

    var person = {
        firstName: "Kris",
        lastName: "Wall",
        image: 'https://pbs.twimg.com/profile_images/713461396835414016/Jxjm2uQ5_400x400.jpg',
        city: 'Oklahoma City',
        tagLine: 'At the space bar...',
        github: 'https://github.com/AmbitiousOkie',
        facebook: false,
        twitter: 'https://twitter.com/ambitiousokie',
        email: 'kris@urbanscouter.com'
    };

    var tabs = [{
        name: 'Resume',
        text: 'This is the resume',
				imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/73.jpg'
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
    }];

    var groups = [
      {
        name: 'OKC Digital Creators'
      },
      {
        name: 'The Irregulars'
      }
    ];

    //  ---- Getters--------------------
    function getState() {
        return state;
    }

    function getPerson() {
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
        getPerson: getPerson,
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

    $scope.person = personService.getPerson();


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

		$scope.getTabs = personService.getTabs;
		$scope.tabs = $scope.getTabs();
    $scope.person = personService.getPerson();


});
