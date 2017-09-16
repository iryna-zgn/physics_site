$(function() {

    var $window = $(window);
    var $burger = $('.burger');
    var $mainNav = $('.main-nav');
    var TOGGLE_CLASS = 'open';

    var $video = $('.video-player');

    function toggleMenu () {
        $burger.toggleClass(TOGGLE_CLASS);
        $mainNav.toggleClass(TOGGLE_CLASS);
    }
    $burger.on('click', toggleMenu);

    if ($window.width() > 1024) {
        $video.vide({
            mp4: 'app/video/video',
            webm: 'app/video/video',
            poster: 'app/video/video'
        }, {
            posterType: 'jpg',
            loop: true,
            muted: true
        });
    }

    $window.on('resize', function () {
        console.log('resize');

        if ($window.width() > 767) {
            $burger.removeClass(TOGGLE_CLASS);
            $mainNav.removeClass(TOGGLE_CLASS);
        }
    });

    $window.on('scroll', function () {
        console.log('scroll');
    });

    $window.on('load', function () {
        console.log('load');
    });

});
