pokeApp.controller('homeCtrl', ['$scope', '$http', 'UsersAPI', 'PokemonAPI', function($scope, $http, UsersAPI, PokemonAPI) {
	$scope.appMenu = [
		{
			title: 'My Pokemon',
			source: 'https://theovichannel.files.wordpress.com/2014/11/pokemon_silhouette__5___pikachu_by_supersmashremix2375-d6ts8mm.png',
			htmlId: 'my-pokemon',
			route: '/roster'
		},
		{
			title: 'My Backpack',
			source: 'http://cdn.flaticon.com/png/256/46006.png',
			htmlId: 'my-backpack',
			route: '/backpack'
		},
		{
			title: 'Store',
			source: 'http://uxrepo.com/static/icon-sets/maki/svg/grocery-store.svg',
			htmlId: 'store',
			route: '/store'
		},
		{
			title: 'Battle Gym Leaders',
			source: 'http://orig13.deviantart.net/1664/f/2015/043/1/a/pokemon_tcg_style_symbol___ground_type_by_arylett_charnoa-d8hq39r.png',
			htmlId: 'gym-leaders',
			route: '/gyms'
		},
		{
			title: 'Challenge Other Users',
			source: 'http://i.imgur.com/RzviwFM.png',
			htmlId: 'other-users',
			route: '/multiplayer'
		},
		{
			title: 'Find New Pokemon',
			source: 'https://d30y9cdsu7xlg0.cloudfront.net/png/18316-200.png',
			htmlId: 'new-pokemon',
			route: '/catchThemAll'
		},
		{
			title: 'Pokedex',
			source: 'http://icons.iconarchive.com/icons/icons8/windows-8/256/Mobile-Cell-Phone-icon.png',
			htmlId: 'pokedex',
			route: '/pokedex'
		},
		{
			title: 'Settings',
			source: 'http://iconshow.me/media/images/ui/ios7-icons/png/512/gear.png',
			htmlId: 'settings',
			route: '/settings'
		},
		{
			title: 'Information',
			source: 'https://api.icons8.com/download/821c2fad415606360ed724f8a65f35660cef0094/windows8/PNG/256/Very_Basic/info-256.png',
			htmlId: 'information',
			route: '/information'
		}
	]
	$scope.pokemon = [];
	$scope.githubUser = null;
	UsersAPI.getMe().success(function(data){
		$scope.githubUser = data;
	});
	PokemonAPI.getStarters().success(function(data){
    	$scope.pokemon = data;
  	});

 	$scope.addToRoster = function(pokemon) {
 		$scope.githubUser.activePokemon.push(pokemon);
 		UsersAPI.postSighting($scope.githubUser._id, pokemon).then(function(){
 			UsersAPI.postNewActive($scope.githubUser._id, pokemon).success(function(data) {
          		$scope.githubUser = angular.copy(data);
        	});
 		});
	};
}]);
