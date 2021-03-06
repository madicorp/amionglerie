'use strict';

var storage = firebaseApp.storage();

Vue.component('fire-img', {
    props: ['url'],
    template: '<img :src="imgUrl" :alt="src">',
    data : function(){
        return {imgUrl : ""};
    },
    computed: {
        src: function () {
            var self = this;
            storage.refFromURL(self.url).getDownloadURL().then(function (url) {
                self.imgUrl = url;
            });
            return "";
        }
    }
});

new Vue({
    delimiters: ['<%', '%>'],
    el: '#about',
    firebase: {
        about: {
            source: db.ref("about"),
            asObject: true,
        }
    },
    updated: function () {
        var $owl = jQuery('.owl-carousel');
        var loop = $owl.data('loop') ? $owl.data('loop') : false;
        var margin = ($owl.data('margin') || $owl.data('margin') == 0) ? $owl.data('margin') : 30;
        var nav = $owl.data('nav') ? $owl.data('nav') : false;
        var dots = $owl.data('dots') ? $owl.data('dots') : false;
        var themeClass = $owl.data('themeclass') ? $owl.data('themeclass') : 'owl-theme';
        var center = $owl.data('center') ? $owl.data('center') : false;
        var items = $owl.data('items') ? $owl.data('items') : 4;
        var autoplay = $owl.data('autoplay') ? $owl.data('autoplay') : false;
        var responsiveXs = $owl.data('responsive-xs') ? $owl.data('responsive-xs') : 1;
        var responsiveSm = $owl.data('responsive-sm') ? $owl.data('responsive-sm') : 2;
        var responsiveMd = $owl.data('responsive-md') ? $owl.data('responsive-md') : 3;
        var responsiveLg = $owl.data('responsive-lg') ? $owl.data('responsive-lg') : 4;
        var responsivexLg = $owl.data('responsive-xlg') ? $owl.data('responsive-xlg') : responsiveLg;
        $owl.trigger('destroy.owl.carousel');
        $owl.owlCarousel({
            loop: loop,
            margin: margin,
            nav: nav,
            autoplay: autoplay,
            dots: dots,
            themeClass: themeClass,
            center: center,
            items: items,
            responsive: {
                0:{
                    items: responsiveXs
                },
                767:{
                    items: responsiveSm
                },
                992:{
                    items: responsiveMd
                },
                1200:{
                    items: responsiveLg
                },
                1600:{
                    items: responsivexLg
                }
            },
        })
            .addClass(themeClass).addClass('owl-center');

        $owl.trigger('refresh.owl.carousel');

        var $testimCarousel = jQuery(".testimonials-carousel");

        $testimCarousel.on('initialized.owl.carousel', function(e){
            var currentItem = e.item.index - 2;
            jQuery(".testimonials-body").find("[data-slide='"+ currentItem +"']").fadeIn();
        });

        $testimCarousel.on('translate.owl.carousel', function(e){
            var currentItem = e.item.index - 2;
            jQuery(".testimonials-body .blockquote-big").fadeOut();
            jQuery(".testimonials-body").find("[data-slide='"+ currentItem +"']").delay(400).fadeIn();
        });
    }
});