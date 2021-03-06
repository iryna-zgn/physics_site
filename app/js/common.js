$(function() {

    var $window = $(window);
    var $body = $('body');
    var $header = $('header');

    var TOGGLE_CLASS = 'open';
    var SHOW_CLASS = 'show';
    var SCROLLED_STATE = 'scrolled-state';
    var OVERFLOW_STATE = 'overflow-state';

    var $burger = $('.burger');
    var $mainNav = $('.main-nav');

    var $video = $('.video-player');

    var $categoriesGroupLink = $('.categories-links__item--group .categories-links__arrow-link');
    var subcategoriesLinks = ('.subcategories-links');

    var $imgSlider = $('.img-slider');

    var $imgPopup = $('.img-popup');
    var $imgPopupGallery = $('.img-popup-gallery');

    var $grid = $('.grid');
    var gridItem = '.grid-item';
    var gridItemWidth = $('.grid-item').width()

    var $accLink = $('.accordion__link');

    // burger
    function toggleMenu () {
        $burger.toggleClass(TOGGLE_CLASS);
        $mainNav.toggleClass(TOGGLE_CLASS);
        $body.toggleClass(OVERFLOW_STATE);
    }
    $burger.on('click', toggleMenu);

    // bg video
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

    // collapse links
    $categoriesGroupLink.on('click', function (e) {
        var target = $(this).next(subcategoriesLinks);

        e.preventDefault();
        $categoriesGroupLink.not($(this)).removeClass('is-up');
        $(this).toggleClass('is-up');

        $(subcategoriesLinks).not(target).removeClass('open');
        target.toggleClass('open');
    });

    // img slider
    $imgSlider.slick({
        slide: '.img-slider__slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoSpeed: 2000
    });

    // img popup
    $imgPopup.magnificPopup({
        type: 'image',
        fixedContentPos: true,
        image: {
            verticalFit: true
        },
        preloader: false
    });

    // img popup Gallery
    $imgPopupGallery.magnificPopup({
        delegate: '.popup-link',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

    //inline popup
    $('.popup-inline-link').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true
    });

    // accordion link active class
    $accLink.on('click', function () {
       $(this).toggleClass('active');
    });


    $window.on('resize', function () {
        console.log('resize');

        if ($window.width() > 767) {
            $burger.removeClass(TOGGLE_CLASS);
            $mainNav.removeClass(TOGGLE_CLASS);
            $body.removeClass(OVERFLOW_STATE);
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

        // grid
        // $grid.masonry({
        //     itemSelector: gridItem,
        //     columnWidth: gridItem
        // });

        // map
        var mapBlock = document.getElementById('map');
        var LAT = Number(mapBlock.getAttribute('data-lat'));
        var LNG = Number(mapBlock.getAttribute('data-lng'));
        var ADDRESS = mapBlock.getAttribute('data-address');
        var ICON_PATH = 'app/icons/marker.jpg';

        var COORDINATES = { lat: LAT, lng: LNG };
        var map = new google.maps.Map(mapBlock, {
            zoom: 18,
            center: COORDINATES,
            mapTypeControl: false
        });
        var infoWindow = new google.maps.InfoWindow();

        var marker = new google.maps.Marker({
            position: COORDINATES,
            icon: ICON_PATH,
            map: map
        });

        infoWindow.setOptions({
            content: '<div class="info-window">' + ADDRESS + '</div>',
            pixelOffset: new google.maps.Size(0, 170)
        });

        infoWindow.open(map, marker);

        google.maps.event.addDomListener(window, 'resize', function () {
            map.setCenter(COORDINATES);
        });

        setTimeout(function () {
            $video.addClass(SHOW_CLASS);
        }, 1000);
    });

});
