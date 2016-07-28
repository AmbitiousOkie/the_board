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
    name: 'Resume'
}, {
    name: 'Bio'
}, {
    name: 'Projects'
}, {
    name: 'Teams'
}, {
    name: 'Events'
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
    $scope.personTabs = $scope.getPersonTabs();

    $scope.person = personService.getPerson();


});
