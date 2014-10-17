'use strict';

angular.module('portfolio.home', ['ngRoute'])
.controller('home', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('home-loaded');
		var video = document.getElementsByTagName('video');
		var p = document.getElementsByTagName('p');
		// Animate on first visit.
		if(bodyClass < 0) {
			
			setTimeout(function() {
				$scope.fadeIn(video[0]);
			}, 0);
			setTimeout(function() {
				$scope.fadeIn(p[0]);
			}, 400);
			$scope.appendBodyClass(' home-loaded');
		} else {
			video[0].className += ' load';
			p[0].className += ' load';
		}
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);