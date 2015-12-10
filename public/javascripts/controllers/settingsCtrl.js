pokeApp.controller('settingsCtrl', ['$scope', '$http', 'UsersAPI', function($scope, $http, UsersAPI) {
  $scope.githubUser = null;
  $scope.userClone = null;
  $scope.show = 0;
  $scope.editMode = false;
  UsersAPI.getMe().success(function(data){
    $scope.githubUser = data;
    $scope.userClone = angular.copy(data);
  });

  $scope.toggleMenu = function(value) {
    $scope.show = value;
  };
  $scope.enableEdit = function() {
    $scope.editMode = true;
  };
  $scope.cancelEdit = function() {
    $scope.editMode = false;
  };
  $scope.saveEdit = function() {
    UsersAPI.editProfile($scope.userClone).success(function(data) {
      $scope.githubUser = data;
    });
    $scope.editMode = false;
  };
}]);
