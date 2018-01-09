'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#intro-section',
    data: {
        home: {
            amionglerie: {
                intro: "",
                text: ""
            },
            services: [],
            academy: {
                intro: "",
                text: ""
            },
            shop: {
                intro: "",
                text: ""
            },
            package:{
                text: "",
                packs: []
            }
        }
    },
    firebase: {
        home: {
            source: db.ref("home"),
            asObject: true,
        }
    },
    updated: function () {
        if (jQuery().flexslider) {
            var $introSlider = jQuery(".intro_section .flexslider");
            $introSlider.each(function (index) {
                var $currentSlider = jQuery(this);
                $currentSlider.flexslider({
                    animation: "fade",
                    pauseOnHover: true,
                    useCSS: true,
                    controlNav: true,
                    directionNav: true,
                    prevText: "",
                    nextText: "",
                    smoothHeight: false,
                    slideshowSpeed: 10000,
                    animationSpeed: 600,
                    start: function (slider) {
                        slider.find('.slide_description').children().css({'visibility': 'hidden'});
                        slider.find('.flex-active-slide .slide_description').children().each(function (index) {
                            var self = jQuery(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            setTimeout(function () {
                                self.addClass("animated " + animationClass);
                            }, index * 200);
                        });
                    },
                    after: function (slider) {
                        slider.find('.flex-active-slide .slide_description').children().each(function (index) {
                            var self = jQuery(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            setTimeout(function () {
                                self.addClass("animated " + animationClass);
                            }, index * 200);
                        });
                    },
                    end: function (slider) {
                        slider.find('.slide_description').children().each(function () {
                            var self = jQuery(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            self.removeClass('animated ' + animationClass).css({'visibility': 'hidden'});
                            // jQuery(this).attr('class', '');
                        });
                    },

                })
                //wrapping nav with container
                    .find('.flex-control-nav')
                    .wrap('<div class="nav-container"/>')
            }); //intro_section flex slider

            jQuery(".flexslider").each(function (index) {
                var $currentSlider = jQuery(this);
                //exit if intro slider already activated
                if ($currentSlider.find('.flex-active-slide').length) {
                    return;
                }
                $currentSlider.flexslider({
                    animation: "fade",
                    useCSS: true,
                    controlNav: false,
                    directionNav: true,
                    prevText: "",
                    nextText: "",
                    smoothHeight: false,
                    slideshowSpeed: 5000,
                    animationSpeed: 800,
                })
            });
        }

    }
    /*methods:{
        bootstrapClassSplit : function (array, _class) {
            return _class + "-" + Math.floor(12 % array.length);
        }
    }*/
});