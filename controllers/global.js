'use strict';

angular.module('portfolio.global', ['ngRoute'])
.controller('global', ['$scope', function($scope) {
	$scope.getBodyClass = function() {
		return document.getElementsByTagName('body')[0].className;
	}
	$scope.appendBodyClass = function(addClass) {
		document.getElementsByTagName('body')[0].className += addClass;
	}
	$scope.fadeIn = function(elem, multi) {
		console.log(elem);
		var _this = this;
		// Fade single element.
		if(!multi) {
			elem.className += ' load';
		// Fade multiple elements.
		} else {
			for(var i=0; i<elem.length; i++) {
				var item = elem.item(i);
				setTimeout(function(item) {
					_this.fadeIn(item);
				}, i * 50, item);
			}
		}
	}
}]);