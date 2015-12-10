pokeApp.factory('PokemonAPI', function($http){
	var API_ROOT = 'pokemon';
	return {
		getAll: function(){
			return $http({
				url: API_ROOT,
				method: 'GET'
			})
		},
		getTypes: function(){
			return $http({
				url: API_ROOT + '/types',
				method: 'GET'
			})
		},
		getStarters: function(){
			return $http({
				url: API_ROOT + '/starters',
				method: 'GET'
			})
		},
		getRandom: function(){
			return $http({
				url: API_ROOT + '/random',
				method: 'GET'
			})
		},
		getPokemon: function(pokemon){
			console.log(pokemon.evolution)
			return $http({
				url: API_ROOT + '/evolution/' + pokemon.evolution,
				method: 'GET'
			})
		}
	}
});
