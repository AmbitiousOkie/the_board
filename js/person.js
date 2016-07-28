// Define the `person` module
var personApp = angular.module('personApp', []);

personApp.factory('personService', function() {


    var person = {
        firstName: "Kris",
        lastName: "Wall",
        image: 'https://pbs.twimg.com/profile_images/713461396835414016/Jxjm2uQ5_400x400.jpg',
        city: 'Oklahoma City',
        tagLine: 'At the space bar...',
        github: 'https://github.com/AmbitiousOkie',
        facebook: false,
        twitter: 'https://twitter.com/ambitiousokie',
        email: 'kris@urbanscouter.com',
        resume: {

            objective: 'This is my objective',
            currentEmp: [{
                name: 'Stellarwinds Studios',
                role: 'Designer',
                startMonth: 'April',
                startYear: '2016',
                resps: [
                    'Web design',
                    'Graphic design',
                    'Photography',
                    'Oh god, it is so long, please stop typing. youalsdif asdfj dsfjasf kjaf kjdafkj dafk jafkja sdjsl fkasdas j;fjas dfk jasdfjlka'
                ],
                website: 'http://stellarwinds.io'
            }],
            education: [{
                name: 'Oklahoma University',
                city: 'Norman',
                state: 'Oklahoma',
                degree: 'Computer Science',
                completion: '2019'
            }, {
                name: 'Oklahoma State University',
                city: 'Oklahoma City',
                state: 'Oklahoma',
                degree: 'MIS',
                completion: '2017'
            }],
            pastEmp: [{
                name: 'Sleepy',
                role: 'Designer',
                startMonth: 'April',
                startYear: '2016',
                resps: [
                    'Web design',
                    'Graphic design',
                    'Photography',
                    'Oh god, it is so long, please stop typing. youalsdif asdfj dsfjasf kjaf kjdafkj dafk jafkja sdjsl fkasdas j;fjas dfk jasdfjlka'
                ],
                website: 'http://stellarwinds.io'
            }, {
                name: 'Gehr Innovation Company, LLC',
                role: 'Lead Consultant',
                startMonth: 'April',
                startYear: '2008',
                resps: [
                    'Fix stuff',
                    'Consult on stuff'
                ],
                website: 'http://gehric.com'
            }],
            community: [{
                name: 'Oklahoma City Ethical Hackers',
                role: 'Creator',
                startYear: '2013',
                endYear: 'Current',
                resps: [
                    'Web design',
                    'Graphic design',
                    'Photography',
                    'Oh god, it is so long, please stop typing. youalsdif asdfj dsfjasf kjaf kjdafkj dafk jafkja sdjsl fkasdas j;fjas dfk jasdfjlka'
                ],
                website: 'https://www.meetup.com/TheIrregulars405/'
            }, {
                name: 'Oklahoma City Digital Creators',
                role: 'Creator',
                startYear: '2016',
                endYear: 'Current',
                resps: [
                    'Talk about stuff',
                    'Consult on stuff'
                ],
                website: 'https://www.meetup.com/Oklahoma-City-Digital-Creators/'
            }]
        },
        bio: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            website: 'http://google.com'
        },
        projects: [{
            name: 'The Board',
            text: 'Building a bulletin board',
            image: 'http://stellarwinds.io/images/promo.png',
            website: 'http://stellarwinds.io/the_board/'
        }, {
            name: 'The Board',
            text: 'Building a bulletin board',
            image: 'http://stellarwinds.io/images/logo-example-full.png',
            website: 'http://stellarwinds.io/the_board/'
        }, {
            name: 'The Board',
            text: 'Building a bulletin board',
            image: 'http://stellarwinds.io/images/patent.png',
            website: 'http://stellarwinds.io/the_board/'
        }],
        teams: [{
            name: 'Stellarwinds Studios',
            text: 'Beautify everything',
            image: 'http://stellarwinds.io/images/photos/photo1.jpg',
            website: 'http://stellarwinds.io/'
        }, {
            name: 'Stellarwinds Studios',
            text: 'Beautify everything',
            image: 'http://stellarwinds.io/images/photos/photo12.jpg',
            website: 'http://stellarwinds.io/'
        }, {
            name: 'Stellarwinds Studios',
            text: 'Beautify everything',
            image: 'http://stellarwinds.io/images/photos/photo3.jpg',
            website: 'http://stellarwinds.io/'
        }],
        events: [{
            name: 'Event 1',
            text: 'Building a bulletin board',
            image: 'http://stellarwinds.io/images/photos/photo15.jpg',
            website: 'http://stellarwinds.io/the_board/'
        }, {
            name: 'Event 2',
            text: 'Building a bulletin board',
            image: 'http://stellarwinds.io/images/photos/photo14.jpg',
            website: 'http://stellarwinds.io/the_board/'
        }, {
            name: 'Event 3',
            text: 'Building a bulletin board',
            image: 'http://stellarwinds.io/images/photos/photo1.jpg',
            website: 'http://stellarwinds.io/the_board/'
        }]
    };



    //  ---- Getters--------------------


    function getPerson() {
        return person;
    }



    // Setters ---------------------------


    // Factory returns -----------------------
    return {
        getPerson: getPerson
    }
});


personApp.controller('dataViewController', function dataViewController($scope, personService, navService) {
    $scope.$watch(function() {
        return navService.getState();
    }, function(value) {
        $scope.state = value;

    });

    $scope.getPersonTabs = navService.getPersonTabs;
    $scope.tabs = $scope.getPersonTabs();
    $scope.person = personService.getPerson();


});
