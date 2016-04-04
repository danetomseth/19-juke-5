'use strict';

juke.directive('doubleClick', function(PlayerFactory) {
    return {
        restrict: 'A',
        scope: {
            doubleClick: '&'
        },
        link: function(scope, element, attr) {
            // element.on('click',function() {
            //     //scope.doubleClick
            //     element.css('background-color', 'blue');
            // }) 
            // scope.toggle = function(song) {
            //     if (song !== PlayerFactory.getCurrentSong()) {
            //         PlayerFactory.start(song, scope.songs);
            //     } else if (PlayerFactory.isPlaying()) {
            //         PlayerFactory.pause();
            //     } else {
            //         PlayerFactory.resume();
            //     }
            // };
            
        }
    }
})