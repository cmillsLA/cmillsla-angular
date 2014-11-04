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
		console.log('shift nav');
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
		pos = pos.replace('px','');
		pos = parseInt(pos);
		d.style.left = dw;
		console.log(w);
		console.log(dw);
		console.log(n);
		console.log(d);
		console.log(trigger);
		// Hide nav.
		if(toggle || pos < dw + 3) {
			console.log('hide');
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
			console.log('show');
			console.log(typeof pos);
			console.log(pos);
			var slide = setInterval(function() {
				if(pos < dw) {
					clearInterval(slide);
					d.style.left = '80%';
				} else {
					d.style.left = pos + 'px';
				}
				pos = pos - 3;
			}, eas);
		}
	}

}]);