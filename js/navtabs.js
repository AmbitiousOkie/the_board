boardApp.factory('navService', function() {



    var currentTab = 'About';

    var accountTabs = [{
        name: 'Profile',
    }, {
        name: 'Settings'
    }, {
        name: 'Sign Out'
    }];

    var navTabs = [{
        name: 'Home',
        showTop: false
    }, {
        name: 'About',
        showTop: false
    }, {
        name: 'Teams',
        showTop: true
    }, {
        name: 'Projects',
        showTop: true
    }, {
        name: 'Events',
        showTop: true
    }];


    var personTabs = [{
        name: 'Resume',
    }, {
        name: 'Bio'
    }, {
        name: 'Projects'
    }, {
        name: 'Teams'
    }, {
        name: 'Events'
    }];

    var teamTabs = [{
        name: 'Team 1',
    }, {
        name: 'Team 12'
    }, {
        name: 'Team 13'
    }, {
        name: 'Team 14'
    }, {
        name: 'Team 15'
    }];

    //  ---- Getters--------------------
    function getNavTabs() {
        return navTabs;
    }



    function getPersonTabs() {
        return personTabs;
    }

    function getTeamTabs() {
        return teamTabs;
    }

    function getAccountTabs() {
      return accountTabs;
    }

    // Setters ---------------------------


    // Factory returns -----------------------
    return {
        getNavTabs: getNavTabs,
        getPersonTabs: getPersonTabs,
        getTeamTabs: getTeamTabs,
        getAccountTabs: getAccountTabs
    }
});



boardApp.controller('navController', function navController($scope, stateService, navService) {
    $scope.$watch(function() {
        return stateService.getState();
    }, function(value) {
        $scope.state = value;
    });

    $scope.setState = stateService.setState;
    $scope.navTabs = navService.getNavTabs();
    $scope.personTabs = navService.getPersonTabs();
    $scope.teamTabs = navService.getTeamTabs();
    $scope.accountTabs = navService.getAccountTabs();




});
