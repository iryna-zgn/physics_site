$(function() {

    var $window = $(window);
    var $burger = $('.burger');
    var $mainNav = $('.main-nav');
    var TOGGLE_CLASS = 'open'

    function toggleMenu () {
        $burger.toggleClass(TOGGLE_CLASS);
        $mainNav.toggleClass(TOGGLE_CLASS);
    }
    $burger.on('click', toggleMenu);

    $window.on('resize', function () {
        if ($window.width() > 767) {
            $burger.removeClass(TOGGLE_CLASS);
            $mainNav.removeClass(TOGGLE_CLASS);
        }
    });

    $('.video-player').vide({
        mp4: 'video/video',
        webm: 'video/video',
        poster: 'video/video'
    }, {
        posterType: 'jpg',
        loop: true,
        muted: true
    });

});
