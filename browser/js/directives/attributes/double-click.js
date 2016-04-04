'use strict';

juke.directive('doubleClick', function($interval, $timeout) {
    return {
        restrict: 'A',
        scope: {
            doubleClick: '&'
        },
        link: function(scope, element, attr) {
            var state = 'nonClicked';
            var count = 0;
            element.on('click',function() {
                count++;
                state = (state == 'paused' ? 'playing' : 'paused');
                if(count === 2) {
                    console.log('clicked twice')
                    scope.doubleClick();
                }
                $interval(function () {
                    count = 0;
                }, 500, 1)
            }) 
            
            
        }
    }
})