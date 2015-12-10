pokeApp.controller('storeCtrl', ['$scope', '$http', 'ItemsAPI', 'UsersAPI', 'PokemonAPI', function($scope, $http, ItemsAPI, UsersAPI, PokemonAPI) {
  $scope.items = [];
  $scope.githubUser = null;
  $scope.stone = false;
  
  ItemsAPI.getAll().success(function(data){
    $scope.items = data;
  });
  UsersAPI.getMe().success(function(data){
    $scope.githubUser = data;
  });
  $scope.purchase = function(item) {
  	if(item.price <= $scope.githubUser.cash) {
  		UsersAPI.purchase(item, $scope.githubUser._id).success(function(data){
  			$scope.githubUser = data;
  			console.log($scope.githubUser)
  		});
  	}
  	else {
  		alert("You can't afford that!");
  	}
  }
  $scope.use = function(stone) {
    $scope.stone = true;
    $scope.selectedStone = stone;
  }
  $scope.evolve = function(index) {
    PokemonAPI.getPokemon($scope.githubUser.activePokemon[index]).success(function(data) {
      alert($scope.githubUser.activePokemon[index].name + " evolved into " + data.name);
      $scope.githubUser.activePokemon[index] = angular.copy(data)
      }).then(function() {
        UsersAPI.updateUser($scope.githubUser).success(function(data){
        $scope.githubUser = angular.copy(data);
          if ($scope.githubUser.pokedex[data.activePokemon[index].pokedexNumber - 1].name !== data.name) {
            UsersAPI.postSighting($scope.githubUser._id, data);
          }
          $scope.stone = false
        });

    });
  };
  $scope.cancel = function() {
    $scope.stone = false;
  }
}]);
