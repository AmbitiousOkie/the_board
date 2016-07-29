var boardApp = angular.module('boardApp', []);

boardApp.factory('stateService', function() {


    var state = '';



    //  ---- Getters--------------------
    function getState() {
        return state;
    }

    // Setters ---------------------------
    function setState(newState) {
        state = newState;
        console.log(state);
    }

    // Factory returns -----------------------
    return {
        getState: getState,
        setState: setState
    }
});
