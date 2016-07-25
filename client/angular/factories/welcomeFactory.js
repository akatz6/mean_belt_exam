app.factory('welcomeFactory', ['$http', function($http){
	function WelcomeFactory(){

		this.get_name =  function(callback){
			$http.get('/get_name').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.get_all_polls = function(callback){
			$http.get('/polls').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.delete_entry= function(question, callback){
			console.log(question)
			var object = {question:question}
			$http.post('/delete', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new WelcomeFactory();
}]);