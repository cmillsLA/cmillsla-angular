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

	$scope.openProject = function(project) {
		console.log('open project');
		// project detail.
		var projectDetail = document.getElementsByClassName('project-detail');
		// if !project detail.
		if(!projectDetail.length) {
			console.log('no project detail div');
			var work = document.getElementsByClassName('work');
			work = work[0];
			var detail = document.createElement('div');
			detail.className = "project-detail";
			var detailHTML = '';
			detailHTML += '<h2></h2>';
			detailHTML += '<div class="project-img"></div>';
			detailHTML += '<p class="project-desc"></p>';
			detailHTML += '<p class="project-tech"></p>';
			detailHTML += '<button class="launch-project">Launch Project</button>';
			detailHTML += '<div class="project-close" ng-click="closeProject();">&times;</div>';
			detail.innerHTML = detailHTML;
			work.insertBefore(detail, work.childNodes[0]);
		}
		// Select project detail elements.
		var projectDetail = document.getElementsByClassName('project-detail');
		projectDetail = projectDetail[0];
		var h2 = projectDetail.getElementsByTagName('h2');
		h2 = h2[0];
		var projectImg = projectDetail.getElementsByClassName('project-img');
		projectImg = projectImg[0];
		var projectDesc = projectDetail.getElementsByClassName('project-desc');
		projectDesc = projectDesc[0];
		var button = projectDetail.getElementsByTagName('button');
		button = button[0];
		// Append project data.
		h2.innerHTML = 'Project Title';
		projectImg.innerHTML = '<img src="/images/project.jpg" />';
		projectDesc.innerHTML = 'Lipsum';
		// Toggle launch project button.
		if(project.url) {
			button.style.display = 'block';
		} else {
			button.style.display = 'none';
		}

	}

	$scope.closeProject = function() {
		console.log('close project');
		var projectDetail = document.getElementsByClassName('project-detail');
		for(var i=0; i<projectDetail.length; i++) {
			projectDetail[i].parentNode.removeChild(projectDetail[i]);
		}
	}

	// setTimeout to use CSS3 transitions.
	setTimeout($scope.init, 0);

}]);