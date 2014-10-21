'use strict';

angular.module('portfolio.global', ['ngRoute'])
.controller('global', ['$scope', function($scope) {

	$scope.getBodyClass = function() {
		return document.getElementsByTagName('body')[0].className;
	}

	$scope.appendBodyClass = function(addClass) {
		document.getElementsByTagName('body')[0].className += addClass;
	}

	// Fade elements with CSS3.
	$scope.fadeIn = function(elem, multi) {
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
				}, i * 25, item);
			}
		}
	}

	$scope.shiftNav = function(toggle) {
		clearInterval(slide);
		var eas = 2;
		var w = document.body.clientWidth;
		var dw = (w / 100) * 80;
		var n = document.getElementsByTagName('nav');
		var d = n[0].getElementsByTagName('div');
		var trigger = document.getElementsByClassName('trigger');
		trigger = trigger[0];
		d = d[0];
		var pos = window.getComputedStyle(d).left;
		d.style.left = pos;
		pos = pos.replace('px','');
		// Hide nav.
		if(toggle || pos < dw + 3) {
			//trigger.innerHTML = '&#9776;';
			//trigger.className = 'trigger';
			var slide = setInterval(function() {
				pos = parseInt(pos) + 3;
				if(pos >= w + 3) {
					clearInterval(slide);
					d.style.left = '100%';
				} else {
					d.style.left = pos + 'px';
				}
			}, eas);
		// Show nav.
		} else {
			//trigger.innerHTML = 'X';
			//trigger.className = 'trigger trigger-x';
			var slide = setInterval(function() {
				if(pos < dw) {
					clearInterval(slide);
					d.style.left = '80%';
				} else {
					d.style.left = pos + 'px';
				}
				pos = parseInt(pos - 3);
			}, eas);
		}
	}

}]);