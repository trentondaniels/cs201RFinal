pokeApp.controller('pokedexController', ['$scope', '$http', 'UsersAPI', function($scope, $http, UsersAPI) {
  $scope.githubUser = null;
  $scope.myPokedex = [];
  UsersAPI.getMe().success(function(data){
    $scope.githubUser = data;
    $scope.myPokedex = data.pokedex
  });
}]);
