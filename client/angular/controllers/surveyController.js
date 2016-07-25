app.controller('surveryController', ['$scope', '$location', 'surveyFactory', '$routeParams', function($scope, $location, surveyFactory, $routeParams){
	index = function(){
		surveyFactory.get_question($routeParams,function(returned_data){
			$scope.survey = returned_data.data.votes
			$scope.surveys = returned_data.data.votes
		})
	}
	index();
	$scope.vote = function(choice, number){
		console.log(choice)
		surveyFactory.vote(choice, number, function(returned_data){
			index();
		})
		index();
	}
	$scope.return_to_polls = function(choice, number){
		$location.url('/logged_in')
	}
}]);