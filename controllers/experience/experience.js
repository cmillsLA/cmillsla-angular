'use strict';

angular.module('portfolio.experience', ['ngRoute'])
.controller('experience', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('experience-loaded');
		var h1 = document.getElementsByTagName('h1');
		var p = document.getElementsByTagName('p');
		var content = document.getElementsByClassName('content');
		// Animate on first visit.
		if(bodyClass < 0) {
			
			setTimeout(function() {
				$scope.fadeIn(h1[0]);
			}, 0);
			setTimeout(function() {
				$scope.fadeIn(p[0]);
			}, 100);
			setTimeout(function() {
				$scope.fadeIn(content[0]);
			}, 500);
			$scope.appendBodyClass(' experience-loaded');
		} else {
			h1[0].className += ' load';
			p[0].className += ' load';
			content[0].className += ' load';
		}
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);