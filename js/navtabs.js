personApp.factory('navService', function() {

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


// Setters ---------------------------
function setCurrentTab(newTab) {
    currentTab = newTab;
}

// Factory returns -----------------------
return {
    currentTab: currentTab,
    navTabs: navTabs,
    currentTab: currentTab
}

});
