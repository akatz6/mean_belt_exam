app.factory('pollFactory', ['$http', function($http){
	function PollFactory(){
		// this.get_name =  function(callback){
		// 	$http.get('/get_name').then(function(retuned_data){
		// 		callback(retuned_data)
		// 	})
		// }
	}
	return new PollFactory();
}]);