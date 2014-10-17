'use strict';

angular.module('portfolio.work', ['ngRoute'])
.controller('work', ['$scope', function($scope) {

	$scope.init = function() {
		var bodyClass = $scope.getBodyClass();
		bodyClass = bodyClass.indexOf('work-loaded');
		var h1 = document.getElementsByTagName('h1');
		var p = document.getElementsByTagName('p');
		var projects = document.getElementsByClassName('project');
		// Animate on first visit.
		if(bodyClass < 0) {
			setTimeout(function() {
				$scope.fadeIn(h1[0]);
			}, 0);
			setTimeout(function() {
				$scope.fadeIn(p[0]);
			}, 100);
			setTimeout(function() {
				$scope.fadeIn(projects, true);
			}, 100);
			$scope.appendBodyClass(' work-loaded');
		} else {
			h1[0].className += ' load';
			p[0].className += 'load';
			for(var i=0; i<projects.length; i++) {
				projects[i].className += ' load';
			}
		}
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);