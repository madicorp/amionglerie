'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#home',
    firebase: {
        home: {
            source: db.ref("home"),
            asObject: true,
        }
    },
    /*methods:{
        bootstrapClassSplit : function (array, _class) {
            return _class + "-" + Math.floor(12 % array.length);
        }
    }*/
});


jQuery(document).ready(function () {
    jQuery('.owl-carousel').each(function () {
        var $carousel = jQuery(this);
        var loop = $carousel.data('loop') ? $carousel.data('loop') : false;
        var margin = ($carousel.data('margin') || $carousel.data('margin') == 0) ? $carousel.data('margin') : 30;
        var nav = $carousel.data('nav') ? $carousel.data('nav') : false;
        var dots = $carousel.data('dots') ? $carousel.data('dots') : false;
        var themeClass = $carousel.data('themeclass') ? $carousel.data('themeclass') : 'owl-theme';
        var center = $carousel.data('center') ? $carousel.data('center') : false;
        var items = $carousel.data('items') ? $carousel.data('items') : 4;
        var autoplay = $carousel.data('autoplay') ? $carousel.data('autoplay') : false;
        var responsiveXs = $carousel.data('responsive-xs') ? $carousel.data('responsive-xs') : 1;
        var responsiveSm = $carousel.data('responsive-sm') ? $carousel.data('responsive-sm') : 2;
        var responsiveMd = $carousel.data('responsive-md') ? $carousel.data('responsive-md') : 3;
        var responsiveLg = $carousel.data('responsive-lg') ? $carousel.data('responsive-lg') : 4;
        var responsivexLg = $carousel.data('responsive-xlg') ? $carousel.data('responsive-xlg') : responsiveLg;
        var filters = $carousel.data('filters') ? $carousel.data('filters') : false;

        if (filters) {
            $carousel.clone().appendTo($carousel.parent()).addClass(filters.substring(1) + '-carousel-original');
            jQuery(filters).on('click', 'a', function (e) {
                //processing filter link
                e.preventDefault();
                if (jQuery(this).hasClass('selected')) {
                    return;
                }
                var filterValue = jQuery(this).attr('data-filter');
                jQuery(this).siblings().removeClass('selected active');
                jQuery(this).addClass('selected active');

                //removing old items
                $carousel.find('.owl-item').length;
                for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                    $carousel.trigger('remove.owl.carousel', [1]);
                }
                ;

                //adding new items
                var $filteredItems = jQuery($carousel.next().find(' > ' + filterValue).clone());
                $filteredItems.each(function () {
                    $carousel.trigger('add.owl.carousel', jQuery(this));

                });

                $carousel.trigger('refresh.owl.carousel');
            });

        } //filters

        $carousel.owlCarousel({
            loop: loop,
            margin: margin,
            nav: nav,
            autoplay: autoplay,
            dots: dots,
            themeClass: themeClass,
            center: center,
            items: items,
            responsive: {
                0: {
                    items: responsiveXs
                },
                767: {
                    items: responsiveSm
                },
                992: {
                    items: responsiveMd
                },
                1200: {
                    items: responsiveLg
                },
                1600: {
                    items: responsivexLg
                }
            },
        })
            .addClass(themeClass);
        if (center) {
            $carousel.addClass('owl-center');
        }
    });
});
