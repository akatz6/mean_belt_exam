app.controller('welcomeController', ['$scope', '$location', 'welcomeFactory',function($scope, $location, welcomeFactory){
	index = function(){
		welcomeFactory.get_name(function(returned_data){
			$scope.name = returned_data.data.user
		})
	}
	polls = function(){
		welcomeFactory.get_all_polls(function(returned_data){
			$scope.polls = returned_data.data.votes
			console.log(returned_data.data.votes)

		})
	}
	index();
	
	polls();
	$scope.newPoll = function(){
		$location.url('/newPoll')
	}

	$scope.logout = function(){
		$location.url('/logout')
	}

	$scope.survey = function(question){
		$location.url('/question/' + question)
	}

	$scope.delete = function(question){
		welcomeFactory.delete_entry(question, 
			function(returned_data){

		})
		index();
		polls();
	}
}]);