boardApp.factory('teamService', function() {


    var team = {
        name: 'Stellarwinds',
        image: 'http://stellarwinds.io/images/seo.png',
        city: 'Oklahoma City',
        tagLine: 'At the space bar...',
        github: 'https://github.com/AmbitiousOkie',
        facebook: false,
        twitter: 'https://twitter.com/ambitiousokie',
        email: 'kris@urbanscouter.com'
    };



    //  ---- Getters--------------------
    function getTeam() {
        return team;
    }

    // Setters ---------------------------


    // Factory returns -----------------------
    return {
        getTeam: getTeam
    }
});


boardApp.controller('teamController', function teamController($scope, teamService, navService, stateService) {
    stateService.setState('Main');

    $scope.$watch(function() {
        return stateService.getState();
    }, function(value) {
        $scope.state = value;

    });

    $scope.getTeamTabs = navService.getTeamTabs;
    $scope.tabs = $scope.getTeamTabs();
    $scope.team = teamService.getTeam();


});
