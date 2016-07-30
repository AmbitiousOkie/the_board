boardApp.factory('navService', function() {

    var home = 'index.html';

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
        showTop: false,
        url: 'index.html'
    }, {
        name: 'About',
        showTop: false,
        url: '#'
    },{
        name: 'People',
        showTop: true,
        url: 'team'
    },{
        name: 'Teams',
        showTop: true,
        url: 'team'
    }, {
        name: 'Projects',
        showTop: true,
        url: '#'
    }, {
        name: 'Events',
        showTop: true,
        url: '#'
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
        name: 'About',
    }, {
        name: 'Members'
    }, {
        name: 'Projects'
    }, {
        name: 'Tab4'
    }, {
        name: 'Tab5'
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

    function getHome() {
        return home;
    }

    // Setters ---------------------------


    // Factory returns -----------------------
    return {
        getNavTabs: getNavTabs,
        getPersonTabs: getPersonTabs,
        getTeamTabs: getTeamTabs,
        getAccountTabs: getAccountTabs,
        getHome: getHome
    }
});



boardApp.controller('navController', function navController($scope, stateService, navService) {
    $scope.$watch(function() {
        return stateService.getTabState();
    }, function(value) {
        $scope.state = value;
    });

    $scope.setTabState = stateService.setTabState;
    $scope.navTabs = navService.getNavTabs();
    $scope.personTabs = navService.getPersonTabs();
    $scope.teamTabs = navService.getTeamTabs();
    $scope.accountTabs = navService.getAccountTabs();
    $scope.home = navService.getHome();

    // Retrieve navTop.html
    $scope.getNavTop = function(){
      return "ng-partials/navTop.html";
  };

});
