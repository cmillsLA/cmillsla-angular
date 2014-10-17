'use strict';

angular.module('portfolio.home', ['ngRoute'])
.controller('home', ['$scope', function($scope) {

	$scope.init = function() {
		var video = document.getElementsByTagName('video');
		var p = document.getElementsByTagName('p');
		// Animate on first visit.
		setTimeout(function() {
			$scope.fadeIn(video[0]);
		}, 0);
		setTimeout(function() {
			$scope.fadeIn(p[0]);
		}, 400);
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);