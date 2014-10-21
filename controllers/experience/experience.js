'use strict';

angular.module('portfolio.experience', ['ngRoute'])
.controller('experience', ['$scope', function($scope) {

	$scope.init = function() {
		// Close nav if open.
		$scope.shiftNav(true);
		var h1 = document.getElementsByTagName('h1');
		var p = document.getElementsByTagName('p');
		var content = document.getElementsByClassName('content');
		// Animate on first visit.
		setTimeout(function() {
			$scope.fadeIn(h1[0]);
		}, 0);
		setTimeout(function() {
			$scope.fadeIn(p[0]);
		}, 100);
		setTimeout(function() {
			$scope.fadeIn(content[0]);
		}, 500);
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);