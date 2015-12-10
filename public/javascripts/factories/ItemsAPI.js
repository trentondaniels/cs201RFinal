pokeApp.factory('ItemsAPI', function($http){
	var API_ROOT = 'items';
	return {
		getAll: function() {
			return $http({
				url: API_ROOT,
				method: 'GET'
			})
		}
	}
});
