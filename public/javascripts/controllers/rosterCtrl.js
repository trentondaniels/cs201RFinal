pokeApp.controller('rosterCtrl', ['$scope', '$http', 'PokemonAPI', 'UsersAPI', function($scope, $http, PokemonAPI, UsersAPI) {
  $scope.githubUser = null;
  $scope.types = null;
  
  PokemonAPI.getTypes().success(function(data){
  	$scope.types = data;
  });
  UsersAPI.getMe().success(function(data){
    $scope.githubUser = data;
  });

  $scope.saveRoster = function() {
  	UsersAPI.postRoster($scope.githubUser).success(function() {
  		alert('Roster Saved')
  	})
  };
  $scope.addToRoster = function(name) {
    if ($scope.githubUser.activePokemon.length < 6) {
      for(var i = 0; i < $scope.githubUser.inactivePokemon.length; i++) {
        if($scope.githubUser.inactivePokemon[i].name === name) {
          $scope.githubUser.activePokemon.push($scope.githubUser.inactivePokemon[i]);
          $scope.githubUser.inactivePokemon.splice(i, 1)
          break;
        }
      }
    }
    else {
      alert("You can only have 6 pokemon!");
      return;
    }
  };
  $scope.removeFromRoster = function(name) {
    if ($scope.githubUser.activePokemon.length !== 1) {
      for(var i = 0; i < $scope.githubUser.activePokemon.length; i++) {
        if($scope.githubUser.activePokemon[i].name === name) {
          $scope.githubUser.inactivePokemon.push($scope.githubUser.activePokemon[i])
          $scope.githubUser.activePokemon.splice(i, 1);
          break;
        }
      }
    }
    else {
      alert("You must have at least 1 pokemon in your active roster!")
      return
    }
  };
}]);
