pokeApp.controller('multiCtrl', ['$scope', '$http', '$q', 'UsersAPI', 'BattleFactory', 'PokemonAPI', function($scope, $http, $q, UsersAPI, BattleFactory, PokemonAPI) {
  $scope.githubUser = null;
  $scope.rival = null;
  $scope.playerActive = null;
  $scope.rivalActive = null;
  $scope.battleOver = false;
  $scope.switchMode = false;
  $scope.playerTurn = true;
  $scope.rivalTurn = false;
  $scope.winner = "";
  $scope.spoils = null;
  $scope.evolveTo = null;
  $scope.potionOptions = false;
  $scope.applyPotionTo = false;
  $scope.selectedPotion = null;
  $scope.healMode = false;

  $scope.initializeMatch = function() {
    UsersAPI.getMe().success(function(data){
      $scope.githubUser = data;
      $scope.playerActive = $scope.githubUser.activePokemon[0];
    }).success(function() {
      UsersAPI.getRival().success(function(data) {
        $scope.rival = data
        $scope.rivalActive = $scope.rival.activePokemon[0];
        if ($scope.githubUser.pokedex[$scope.rivalActive.pokedexNumber - 1].name !== $scope.rivalActive.name) {
          UsersAPI.postSighting($scope.githubUser._id, $scope.rivalActive)
        }
        $scope.spoils = {
          xp: 8,
          cash: 1000 * $scope.rival.activePokemon.length,
          storyProgress: 0
        };
        $scope.battleOver = false;
        $scope.playerTurn = true;
        return;
      });
    });   
  };

  $scope.cancel = function() {
    $scope.healMode = false;
    $scope.switchMode = false;
    $scope.potionOptions = false;
    $scope.playerTurn = true;
  }
  
  $scope.changePokemon = function() {
    $scope.switchMode = true;
  }

  $scope.iChooseYou = function(name) {
    $scope.playerTurn = false
    for(var i = 0; i < $scope.githubUser.activePokemon.length; i++) {
      if(name === $scope.githubUser.activePokemon[i].name) {
        $scope.playerActive = $scope.githubUser.activePokemon[i];
        break;
      }
    }
    $scope.switchMode = false;
    $scope.rivalAttack();
  };

  $scope.useItem = function() {
    $scope.playerTurn = false;
    $scope.potionOptions = true;
  };

  $scope.choosePotion = function(potion){
    $scope.potionOptions = false;
    $scope.selectedPotion = potion;
    $scope.healMode = true;
  }

  $scope.applyPotion = function(name) {
    $scope.healMode = false;
    for(var i = 0; i < $scope.githubUser.activePokemon.length; i++) {
      if(name === $scope.githubUser.activePokemon[i].name) {
        console.log($scope.githubUser.activePokemon[i].hp);
        $scope.githubUser.activePokemon[i].hp += $scope.selectedPotion.affect;
        console.log($scope.githubUser.activePokemon[i].hp);
        if($scope.githubUser.activePokemon[i].hp > $scope.githubUser.activePokemon[i].maxHp) {
          $scope.githubUser.activePokemon[i].hp = $scope.githubUser.activePokemon[i].maxHp
        }
        for (var j = 0; j < $scope.githubUser.backpack.length; j++) {
          if ($scope.githubUser.backpack[j].name === $scope.selectedPotion.name) {
            $scope.githubUser.backpack[j].quantity -= 1;
            if ($scope.githubUser.backpack[j].quantity <= 0) {
              $scope.githubUser.backpack.splice(j, 1)
            }
            break;
          }
        }
        break;
      }
    }
    return $scope.rivalAttack();
  }

  $scope.attack = function() {
    $scope.playerTurn = false;
    var damage = BattleFactory.typeBonus($scope.playerActive.type, $scope.rivalActive.type, $scope.playerActive.minAttack, $scope.playerActive.maxAttack, $scope.rivalActive.defense);
    $scope.rivalActive.hp -= damage;
    if ($scope.rivalActive.hp <= 0) {
      for (var j = 0; j < $scope.rival.activePokemon.length; j++) {
        if ($scope.rivalActive.name === $scope.rival.activePokemon[j].name) {
          $scope.rival.activePokemon[j].hp = $scope.rivalActive.hp;
          angular.element(document.querySelector("#rival" + j)).removeClass("playable");
          angular.element(document.querySelector("#rival" + j)).addClass("KO");
          break;
        }
      }
      for (var i = 0; i < $scope.rival.activePokemon.length; i++) {
        if($scope.rival.activePokemon[i].hp > 0) {
          $scope.rivalActive = $scope.rival.activePokemon[i];
          if ($scope.githubUser.pokedex[$scope.rivalActive.pokedexNumber - 1].name !== $scope.rival.activePokemon[i].name) {
            UsersAPI.postSighting($scope.githubUser._id, $scope.rivalActive);
          }
          return $scope.rivalAttack();
        }
      }
      $scope.winner = $scope.githubUser.user;
      var requests = [];
      $scope.githubUser.activePokemon.forEach(function (value, i){
        value.hp = value.maxHp;
        if(value.xp !== null) {
          value.xp += $scope.spoils.xp;
          if (value.xp >= value.maxXP) {
            var promise = PokemonAPI.getPokemon(value).success(function(data) {
              alert(value.name + " evolved into " + data.name);
              if ($scope.githubUser.pokedex[data.pokedexNumber - 1].name !== data.name) {
                UsersAPI.postSighting($scope.githubUser._id, data)
              }
              $scope.githubUser.activePokemon[i] = angular.copy(data);
              console.log($scope.githubUser);
            });
            requests.push(promise);
          }
        }
      });
      $q.all(requests).then(function() {
        $scope.githubUser.storyProgress += 1;
        $scope.githubUser.cash += $scope.spoils.cash;
        $scope.githubUser.win += 1;
        UsersAPI.updateUser($scope.githubUser).success(function(data){
          $scope.githubUser = angular.copy(data);
          $scope.battleOver = true;
        });
      });
    }
    else {
      $scope.rivalAttack();
    }
  };

  $scope.rivalAttack = function() {
    var damage = BattleFactory.typeBonus($scope.rivalActive.type, $scope.playerActive.type, $scope.rivalActive.minAttack, $scope.rivalActive.maxAttack, $scope.playerActive.defense);
    $scope.playerActive.hp -= damage;
    if ($scope.playerActive.hp <= 0) {
      for (var i = 0; i < $scope.githubUser.activePokemon.length; i++) {
        if ($scope.playerActive.name === $scope.githubUser.activePokemon[i].name) {
          $scope.githubUser.activePokemon[i].hp = $scope.playerActive.hp;
          angular.element(document.querySelector("#player" + i)).removeClass("playable");
          angular.element(document.querySelector("#player" + i)).addClass("KO");
          for(var y = 0; y < $scope.githubUser.activePokemon.length; y++) {
            if($scope.githubUser.activePokemon[y].hp > 0) {
              $scope.switchMode = true;
              $scope.playerTurn = true;
              return;
            }
          }
          $scope.winner = $scope.rival.user;
          UsersAPI.postLoss($scope.githubUser._id)
          $scope.battleOver = true;
          return
        }
      }
    }
    else {
      $scope.playerTurn = true;
    }
  };
}]);
