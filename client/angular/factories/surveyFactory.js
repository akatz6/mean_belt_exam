app.factory('surveyFactory', ['$http', function($http){
	function SurveyFactory(){
		this.get_question=  function(question, callback){
			$http.post('/survey', question).then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.vote = function(choice, number, callback){
			var object = {choice:choice, number:number}
			$http.post('/vote', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new SurveyFactory();
}]);