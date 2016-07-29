boardApp.factory('teamService', function() {


    var team = {
        name: 'Stellarwinds',
        image: 'https://pbs.twimg.com/profile_images/713461396835414016/Jxjm2uQ5_400x400.jpg',
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
    $scope.$watch(function() {
        return stateService.getState();
    }, function(value) {
        $scope.state = value;

    });

    $scope.getTeamTabs = navService.getTeamTabs;
    $scope.tabs = $scope.getTeamTabs();
    $scope.team = teamService.getTeam();


});
