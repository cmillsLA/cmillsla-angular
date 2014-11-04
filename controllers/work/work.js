'use strict';

angular.module('portfolio.work', ['ngRoute'])
.controller('work', ['$scope', function($scope) {

	$scope.init = function() {
		// Close nav if open.
		$scope.shiftNav(true);
		var h1 = document.getElementsByTagName('h1');
		var p = document.getElementsByTagName('p');
		var projects = document.getElementsByClassName('project');
		var projectContent = document.getElementsByClassName('project-content');
		setTimeout(function() {
			$scope.fadeIn(h1[0]);
		}, 0);
		setTimeout(function() {
			$scope.fadeIn(p[0]);
		}, 100);
		setTimeout(function() {
			$scope.fadeIn(projects, true);
		}, 250);
		setTimeout(function() {
			$scope.fadeIn(projectContent, true);
		}, 1250);
	}
	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);