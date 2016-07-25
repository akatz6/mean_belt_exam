app.controller('new_pollController', ['$scope', '$location', 'new_pollFactory',function($scope, $location, new_pollFactory){
	$scope.cancel = function(){
		$location.url('/logged_in')
	}
	$scope.create_poll = function(){
		new_pollFactory.new_poll($scope.poll, function(sendUser){
			$location.url('/logged_in')
		})
		$location.url('/logged_in')
	}
}]);