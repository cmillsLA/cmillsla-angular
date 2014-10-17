'use strict';

angular.module('portfolio.contact', ['ngRoute'])
.controller('contact', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('contact-loaded');
		var h1 = document.getElementsByTagName('h1');
		var p = document.getElementsByTagName('p');
		// Animate on first visit.
		if(bodyClass < 0) {
			
			setTimeout(function() {
				$scope.fadeIn(h1[0]);
			}, 0);
			setTimeout(function() {
				$scope.fadeIn(p[0]);
			}, 100);
			$scope.appendBodyClass(' contact-loaded');
		} else {
			h1[0].className += ' load';
			p[0].className += ' load';
		}
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);