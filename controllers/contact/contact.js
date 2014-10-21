'use strict';

angular.module('portfolio.contact', ['ngRoute'])
.controller('contact', ['$scope', function($scope) {

	$scope.init = function() {
		// Close nav if open.
		$scope.shiftNav(true);
		var h1 = document.getElementsByTagName('h1');
		var p = document.getElementsByTagName('p');
		setTimeout(function() {
			$scope.fadeIn(h1[0]);
		}, 0);
		setTimeout(function() {
			$scope.fadeIn(p[0]);
		}, 100);
		$scope.appendBodyClass(' contact-loaded');
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);