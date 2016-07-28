personApp.factory('navService', function() {

var state = 'Resume';

var currentTab = 'About';

var navTabs = [
  {
    name: 'Home'
  },
  {
    name: 'About'
  },
  {
    name: 'Teams'
  },
  {
    name: 'Projects'
  },
  {
    name: 'Events'
  },
];


var personTabs = [{
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


//  ---- Getters--------------------
function getCurrentTab() {
    return currentTab;
}

function getNavTabs() {
    return navTabs;
}

function getState() {
    return state;
}

function getPersonTabs() {
    return personTabs;
}


// Setters ---------------------------
function setCurrentTab(newTab) {
    currentTab = newTab;
}

function setState(newState) {
    state = newState;
}

// Factory returns -----------------------
return {
    currentTab: currentTab,
    navTabs: navTabs,
    currentTab: currentTab,
    getState: getState,
    getPersonTabs: getPersonTabs,
    setState: setState
}

});


// Define the `PersonController` controller on the `person` module
personApp.controller('navController', function navController($scope, personService, navService) {
    $scope.$watch(function() {
        return navService.getState();
    }, function(value) {
        $scope.state = value;
    });

    $scope.setState = navService.setState;
    $scope.getPersonTabs = navService.getPersonTabs;
    $scope.tabs = $scope.getPersonTabs();

    $scope.person = personService.getPerson();


});

// personApp.controller('navController', function navController($scope, personService, navService) {
//     $scope.$watch(function() {
//         return navService.getState();
//     }, function(value) {
//         $scope.state = value;
//
//     });
//
//     $scope.setState = navService.setState;
//     $scope.getPersonTabs = navService.getPersonTabs;
//     $scope.tabs = $scope.getPersonTabs();
//
// });
