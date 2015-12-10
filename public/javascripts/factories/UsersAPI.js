pokeApp.factory('UsersAPI', function($http){
	var API_ROOT = 'user';
	return {
		getMe: function(){
			return $http({
			url: API_ROOT + '/me',
			method: 'GET'
			})
		},
		getRival: function(){
			return $http({
				url: API_ROOT + '/rival',
				method: 'GET'
			})
		},
		getGymLeader: function(){
			return $http({
				url: API_ROOT + '/gymLeader',
				method: 'GET'
			})
		},
		editProfile: function(user){
			return $http({
				url: API_ROOT + '/' + user._id,
				method: 'PUT',
				data: user
			})
		},
		postRoster: function(user){
			return $http({
				url: API_ROOT + '/' + user._id + '/roster',
				method: 'PUT',
				data: user
			})
		},
		postNewActive: function(id, pokemon) {
			return $http({
				url: API_ROOT + '/' + id + '/newActive',
				method: 'PUT',
				data: pokemon
			})
		},
		postInactive: function(id, pokemon) {
			return $http({
				url: API_ROOT + '/' + id + '/newInactive',
				method: 'PUT',
				data: pokemon
			})
		},
		postLoss: function(id){
			return $http({
				url: API_ROOT + '/' + id + '/loss',
				method: 'PUT'
			})
		},
		postSighting: function(id, entry){
			return $http({
				url: API_ROOT + '/' + id + '/newSighting',
				method: 'PUT',
				data: entry
			})
		},
		purchase: function(item, id){
			return $http({
				url: API_ROOT + '/' + id + '/item',
				method: 'POST',
				data: item
			})
		},
		updateUser: function(user) {
			return $http({
				url: API_ROOT + "/" + user._id + "/update",
				method: 'PUT',
				data: user
			})
		},
		usedPokeball: function(user) {
			return $http({
				url: API_ROOT + "/" + user._id + "/pokeball",
				method: 'PUT',
				data: user
			})
		}
	}
});
