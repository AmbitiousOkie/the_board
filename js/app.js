// Define the `person` module
var personApp = angular.module('personApp', []);

// Define the `PersonController` controller on the `person` module
personApp.controller('PersonController', function PersonController($scope) {
  $scope.person = {
    firstName: "Kris",
    lastName: "Wall"
  };

  $scope.tabs = [
    {
      name: 'Resume',
      text: 'resume text'
    },
    {
      name: 'Bio',
      text: 'bio text'
    },
    {
      name: 'Projects',
      text: 'projects text'
    },
    {
      name: 'Organizations',
      text: 'orgs text'
    },
    {
      name: 'Events',
      text: 'events text'
    }
  ];

});
