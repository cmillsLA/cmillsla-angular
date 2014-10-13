'use strict';

angular.module('portfolio.work', ['ngRoute'])
.controller('work', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('work-loaded');
		// Animate on first visit.
		if(bodyClass < 0) {
			var fade = 'fade load';
			var fadeDelay = 'fade-delay load';
			var fadeDelay2 = 'fade-delay1 load content work';
			$scope.appendBodyClass(' work-loaded');
		// Don't animate.
		} else {
			var fade = fadeDelay = 'load';
			var fadeDelay2 = 'load content work';
		}
		var h1 = document.getElementsByTagName('h1');
		h1[0].className = fade;
		var p = document.getElementsByTagName('p');
		p[0].className = fadeDelay;
		var content = document.getElementsByClassName('content');
		content[0].className = fadeDelay2;
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);