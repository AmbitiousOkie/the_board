var boardApp = angular.module('boardApp', []);

boardApp.factory('stateService', function() {


    var state = 'Resume';



    //  ---- Getters--------------------
    function getState() {
        return state;
    }

    // Setters ---------------------------
    function setState(newState) {
        state = newState;
    }

    // Factory returns -----------------------
    return {
        getState: getState
    }
});
