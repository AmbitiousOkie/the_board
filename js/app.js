// Define the `person` module
var personApp = angular.module('personApp', []);

// Define the `PersonController` controller on the `person` module
personApp.controller('PersonController', function PersonController($scope) {
  $scope.person = [
    {
      first_name: 'Kris',
      last_name: 'Wall',
      twitter: 'https://twitter.com/ambitiousokie',
      tagline: 'At the space bar...',
      resume: 'resume',
      bio: 'bio',
      organizations: 'organizations',
      projects: 'projects',
      events: 'events'
    }
  ];
});
