'use strict';

juke.directive('albumList', function() {
	return {
		restrict: 'E',
		templateUrl: '/js/directives/album/album.html',
		scope: {
			albums: "="
		}
	}
})