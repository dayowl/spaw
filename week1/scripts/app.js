(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    
    $scope.CheckItOut = function() {
      var turn = WorkItOut($scope.whatIsItAllAbout);
      var motherfuckin = "";
      if (turn == 0)
        motherfuckin = "Please enter data first";
      else if (turn <= 3)
        motherfuckin = "Enjoy!";
      else
        motherfuckin = "Too much!";
      
      $scope.partyOut = motherfuckin;
    }
    
    function WorkItOut (longString) {
      if (typeof longString === 'undefined' || !longString)
        return 0;
      
      var boys = longString.split(',');
      var party = [];
      
      for (var ii = 0; ii < boys.length; ii++) {
        if (boys[ii].trim() !== "") {
          party.push(boys[ii]);
        }
      }

      return party.length;
    }
    
  };
  
})();