// Register `tabList` component, along with its associated controller and template
angular.
module('personApp').
component('resumeData', {
    template: '<ul class="tabs">' +
    '<li class="tab col s2 push-s1" ng-repeat="tab in $ctrl.tabs">' +
        '<a href="#{{tab.name}}">{{tab.name}}</a>' +
        '</li>' +
        '</ul>',




    controller: function resumeDataController() {
        this.tabs = [{
            name: 'Resume',
            text: 'resume text'
        }, {
            name: 'Bio',
            text: 'bio text'
        }, {
            name: 'Projects',
            text: 'projects text'
        }, {
            name: 'Teamsss',
            text: 'team text'
        }, {
            name: 'Eventsss',
            text: 'events text'
        }];
    }
});
