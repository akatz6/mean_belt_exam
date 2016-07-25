app.factory('new_pollFactory', ['$http', function($http){
	function NewPollFactory(){
		this.new_poll =  function(poll){
			$http.post('/poll', poll).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new NewPollFactory();
}]);