$(function() {

    var $window = $(window);
    var $body = $('body');
    var $header = $('header');

    var TOGGLE_CLASS = 'open';
    var SCROLLED_STATE = 'scrolled-state';
    var OVERFLOW_STATE = 'overflow-state';

    var $burger = $('.burger');
    var $mainNav = $('.main-nav');

    var $video = $('.video-player');

    function toggleMenu () {
        $burger.toggleClass(TOGGLE_CLASS);
        $mainNav.toggleClass(TOGGLE_CLASS);
        $body.toggleClass(OVERFLOW_STATE);
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

        if ($window.scrollTop() > $window.height() - $header.height()) {
            $header.addClass(SCROLLED_STATE);
        } else {
            $header.removeClass(SCROLLED_STATE);
        }
    });

    $window.on('load', function () {
        console.log('load');
    });

});
