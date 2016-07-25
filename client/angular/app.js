var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
	 .when('/',{
		templateUrl: 'angular/partials/login.html'
	 })
	.when('/logged_in',{
		templateUrl: 'angular/partials/welcome.html'
	})
	.when('/newPoll',{
		templateUrl: 'angular/partials/new_poll.html'
	})
	.when('/logout',{
		templateUrl: 'angular/partials/login.html'
	})
	.when('/question/:question',{
		templateUrl: 'angular/partials/survey.html'
	})
	.otherwise({
		templateUrl: 'angular/partials/login.html'
	})
});