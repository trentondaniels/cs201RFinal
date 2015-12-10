pokeApp.controller('catchCtrl', ['$scope', '$http', '$q', 'BattleFactory', 'PokemonAPI', 'UsersAPI', function($scope, $http, $q, BattleFactory, PokemonAPI, UsersAPI) {
  $scope.githubUser = null;
  $scope.random = null;
  $scope.randomClone = null;
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
      PokemonAPI.getRandom().success(function(data) {
        $scope.random = data;
        $scope.randomClone = angular.copy(data);
        if ($scope.githubUser.pokedex[$scope.random.pokedexNumber - 1].name !== $scope.random.name) {
          UsersAPI.postSighting($scope.githubUser._id, $scope.random)
        }
        $scope.spoils = {
          xp: 5,
          cash: 50,
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
    $scope.pokeballOptions = false;
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

  $scope.throwPokeball = function(ball) {
    $scope.potionOptions = false;
    var chance = $scope.random.hp + $scope.random.rarity - ball.affect;
    var compareChance = Math.floor(Math.random() * 101);
    for (var j = 0; j < $scope.githubUser.backpack.length; j++) {
          if ($scope.githubUser.backpack[j].name === ball.name) {
            $scope.githubUser.backpack[j].quantity -= 1;
            if ($scope.githubUser.backpack[j].quantity <= 0) {
              $scope.githubUser.backpack.splice(j, 1)
            }
            UsersAPI.usedPokeball($scope.githubUser)
            break;
          }
        }
    if (chance <= compareChance) {
      if($scope.githubUser.activePokemon.length < 6) {
        UsersAPI.postNewActive($scope.githubUser._id, $scope.randomClone).success(function(data) {
          $scope.githubUser = angular.copy(data);
        })
      }
      else {
        UsersAPI.postInactive($scope.githubUser._id, $scope.randomClone).success(function(data) {
          $scope.githubUser = angular.copy(data);
        })
      }
       $scope.winner = "You caught " + $scope.random.name
       $scope.battleOver = true;
    }
    else {
      alert('So Close!')
      return $scope.rivalAttack();
    }
  }

    $scope.attack = function() {
    $scope.playerTurn = false;
    var damage = BattleFactory.typeBonus($scope.playerActive.type, $scope.random.type, $scope.playerActive.minAttack, $scope.playerActive.maxAttack, $scope.random.defense);
    $scope.random.hp -= damage;
    if ($scope.random.hp <= 0) {
      $scope.winner = $scope.githubUser.user + "is victorious!!!";
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
    var damage = BattleFactory.typeBonus($scope.random.type, $scope.playerActive.type, $scope.random.minAttack, $scope.random.maxAttack, $scope.playerActive.defense);
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
          $scope.winner = $scope.random.name + "is victorious!!!";
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
