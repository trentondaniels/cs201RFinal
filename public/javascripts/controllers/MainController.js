pokeApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.pokemon = [];
	$scope.userLogged = false;
	$scope.user = "";
  $scope.roster = [];
  $scope.rival = null;
  $scope.player = null;
  $scope.playerActive = null;
  $scope.rivalActive = null;
  $scope.fightInit = false;
  $scope.battleOver = false;
  $scope.switchMode = false;
  $scope.winner = "";
  $scope.githubUser = null;

//GET /pokemon
$scope.getPokemon = function() {
  return $http.get('/pokemon').success(function(data){
    angular.copy(data, $scope.pokemon);
  });
};

//GET /:user
$scope.checkUserName = function(user) {
  return $http.get('/user/' + $scope.user).success(function(data) {
    if(typeof data[0] === 'undefined') {
      $scope.userLogged = true;
    }
    else {
      alert("That name has already been used");
    }
  });
};

  // POST: /user
	$scope.postUser = function() {
		user = {user: $scope.user, win:0, loss:0, pokemon: $scope.roster};
		$http.post("/user", user).success(function(data) {
			console.log(data);
		});
	};

  //GET: /user
  $scope.getUser = function() {
    $http.get("/user").success(function(data) {
      if (data.user === $scope.user) {
        $scope.getUser();
      }
      else {
        $scope.rival = data;
        $scope.rivalActive = $scope.rival.pokemon[0];
      }
    });
  };

  //GET: /me
  $scope.getMe = function() {
    $http.get("/user/" + $scope.user).success(function(data) {
      $scope.player = data[0];
      $scope.playerActive = $scope.player.pokemon[0];
      $scope.fightInit = true;
    });
  };

  $scope.getGit = function () {
    $http.get('/user/me').success(function(data){
      $scope.githubUser = data;
      console.log($scope.githubUser.user)
    });
  };

  $scope.recordResult = function(winner, loser) {
    $http.put("/user/" + winner.user + "/win").success(function(data) {
      cosole.log("Recorded Win")
    });
    $http.put("/user/" + loser.user + "/loss").success(function(data) {
      cosole.log("Recorded Loss")
    });
  };
  
  $scope.addToRoster = function(name) {
    if ($scope.roster.length < 6) {
      for (var j = 0; j < $scope.roster.length; j++) {
        if(name === $scope.roster[j].name) {
          alert("You already have " + name + " on your roster");
          return;
        }
      }
      for (var i = 0; i < $scope.pokemon.length; i++) {
        if(name === $scope.pokemon[i].name) {
          $scope.roster.push($scope.pokemon[i]);
        }
      }
    }
    else {
      alert("You can only have 6 pokemon!");
      return;
    }
  };
  $scope.startMatch = function() {
    $scope.postUser();
    $scope.getUser();
    $scope.getMe();
  };

  //Simulates a round of attacks
  
  $scope.changePokemon = function() {
    $scope.switchMode = true;
  }
  $scope.playAgain = function() {
    $scope.getUser();
    $scope.getMe();
    $scope.battleOver = false;
  };
  $scope.iChooseYou = function(name) {
    for(var i = 0; i < $scope.player.pokemon.length; i++) {
      if(name === $scope.player.pokemon[i].name) {
        $scope.playerActive = $scope.player.pokemon[i];
        break;
      }
    }
    $scope.switchMode = false;
  };

  $scope.attack = function() {
    //Player's turn
    damage = $scope.playerActive.attack - $scope.rivalActive.defense
    if (damage < 0) {
      damage = 0;
    }
    if ($scope.rivalActive.hp - damage <= 0) {
      $scope.rivalActive.hp = 0;
      for (var j = 0; j < $scope.rival.pokemon.length; j++) {
        if ($scope.rivalActive.name === $scope.rival.pokemon[j].name) {
          $scope.rival.pokemon[j].hp = $scope.rivalActive.hp;
          id = "#rival" + $scope.rival.pokemon[j].name;
          console.log(id);
          angular.element(document.querySelector(id)).removeClass("playable");
          angular.element(document.querySelector(id)).addClass("KO");
          for(var x = 0; x < $scope.rival.pokemon.length; x++) {
            if($scope.rival.pokemon[x].hp > 0) {
              $scope.rivalActive = $scope.rival.pokemon[x];
              return;
            }
          }
          console.log("all dead");
          $scope.winner = $scope.player.user;
          $scope.recordResult($scope.player, $scope.rival)
          $scope.battleOver = true;
          return
        }
      }
    }
    else {
      $scope.rivalActive.hp -= damage;
    }

    //Rivals Turn
    damage = $scope.rivalActive.attack - $scope.playerActive.defense
    if (damage < 0) {
      damage = 0;
    }
    if ($scope.playerActive.hp - damage <= 0) {
      $scope.playerActive.hp = 0;
      for (var i = 0; i < $scope.player.pokemon.length; i++) {
        if ($scope.playerActive.name === $scope.player.pokemon[i].name) {
          $scope.player.pokemon[i].hp = $scope.playerActive.hp;
          id = "#player" + $scope.player.pokemon[i].name;
          console.log(id);
          angular.element(document.querySelector(id)).removeClass("playable");
          angular.element(document.querySelector(id)).addClass("KO");
          for(var y = 0; y < $scope.player.pokemon.length; y++) {
            if($scope.player.pokemon[y].hp > 0) {
              $scope.switchMode = true;
              return;
            }
          }
          console.log("all dead");
          $scope.winner = $scope.rival.user;
          $scope.recordResult($scope.rival, $scope.player)
          $scope.battleOver = true;
          return
        }
      }
    }
    else {
      $scope.playerActive.hp -= damage;
    }
  };
}]);
