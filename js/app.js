var boardApp = angular.module('boardApp', ['ngLoadScript']);

boardApp.factory('stateService', function() {


    var tabState = '';
    var pageState = '';



    //  ---- Getters--------------------
    function getTabState() {
        return tabState;
    }

    function getPageState() {
        return pageState;
    }


    // Setters ---------------------------
    function setTabState(newState) {
        tabState = newState;
        console.log('tabState: ' + tabState);
    }

    function setPageState(newPageState) {
        pageState = newPageState;
        console.log('pageState: ' + pageState);
    }

    // Factory returns -----------------------
    return {
        getTabState: getTabState,
        setTabState: setTabState,
        getPageState: getPageState,
        setPageState: setPageState
    }
});
