"use strict";new Vue({delimiters:["<%","%>"],el:"#shop_section",firebase:{shop:{source:db.ref("about"),asObject:!0}},updated:function(){var e=jQuery(".top-models-carousel"),a=!!e.data("loop")&&e.data("loop"),t=e.data("margin")||0===e.data("margin")?e.data("margin"):30,s=!!e.data("nav")&&e.data("nav"),o=!!e.data("dots")&&e.data("dots"),d=e.data("themeclass")?e.data("themeclass"):"owl-theme",i=!!e.data("center")&&e.data("center"),r=e.data("items")?e.data("items"):4,n=!!e.data("autoplay")&&e.data("autoplay"),l=e.data("responsive-xs")?e.data("responsive-xs"):1,m=e.data("responsive-sm")?e.data("responsive-sm"):2,p=e.data("responsive-md")?e.data("responsive-md"):3,u=e.data("responsive-lg")?e.data("responsive-lg"):4,c=e.data("responsive-xlg")?e.data("responsive-xlg"):u;e.owlCarousel({loop:a,margin:t,nav:s,autoplay:n,dots:o,themeClass:d,center:i,items:r,responsive:{0:{items:l},767:{items:m},992:{items:p},1200:{items:u},1600:{items:c}}}).addClass(d).addClass("owl-center"),e.trigger("refresh.owl.carousel"),jQuery(".top-models-carousel").on("initialized.owl.carousel",function(e){var a=jQuery(".top-models-carousel .cloned").size();jQuery("#top_models_pagination").text(e.item.index-a/2+1+" / "+e.item.count)}),jQuery(".top-models-carousel").on("translate.owl.carousel",function(e){var a=jQuery(".top-models-carousel .cloned").size();jQuery("#top_models_pagination").text(e.item.index-a/2+1+" / "+e.item.count)})}});