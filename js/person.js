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
            text: 'This is my life story.  Stay awhile and listen.  Snakes on a plane, muthafooka. Yeah, that is right.  I said it.  Whaddya gonna do? Go again? Sure, that sounds like a great idea.  You should have said that before. Uhuh.. You first.',
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

    var groups = [{
        name: 'OKC Digital Creators'
    }, {
        name: 'The Irregulars'
    }];

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
