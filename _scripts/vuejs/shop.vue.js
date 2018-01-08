'use strict';

var storage = firebaseApp.storage();

Vue.component('item-content', {
    props: ['url', 'item'],
    delimiters: ['<%', '%>'],
    template: '<div class="vertical-item content-absolute">\
                <div class="item-media">\
                    <img :src="imgUrl" :alt="src">\
                    <div class="media-links">\
                    </div>\
                </div>\
                <div class="item-content text-center before_cover cs">\
                    <div class="links-wrap">\
                        <a class="p-link" title="" href="#"><% item.name %> - <% item.price %> FCFA</a>\
                        <a class="p-view prettyPhoto pull-right" title="" data-gal="prettyPhoto[gal]"\
                           :href="imgUrl"></a>\
                    </div>\
                    <div class="bg_overlay"></div>\
                    <div class="model-parameters">\
                        <div>\
                            <p><% item.description %></p>\
                        </div>\
                    </div>\
                </div>\
            </div>',
    data: function () {
        return {imgUrl: ""};
    },
    computed: {
        src: function () {
            var self = this;
            storage.refFromURL(self.url).getDownloadURL().then(function (url) {
                self.imgUrl = url;
                jQuery('.isotope_container').isotope('shuffle');
            });
            return "";
        }
    },
    updated: function () {
        jQuery('.isotope_container').isotope('shuffle');
        jQuery("a[data-filter='*']").click();
    }
});


new Vue({
    delimiters: ['<%', '%>'],
    el: '#shop',
    firebase: {
        shop: {
            source: db.ref("shop"),
            asObject: true,
            readyCallback: function () {
                var self = this;
                self.shop.items = [];
                self.shop.types.forEach(function (type) {
                    Array.prototype.push.apply(self.shop.items, type.items.map(function (item) {
                        item.type = type.name;
                        return item;
                    }));
                });
            }
        }
    },
    methods: {
        format: function (str) {
            return str.replace(/\s+/g, '-').toLowerCase();
        }
    },
    updated: function () {
        var $container = jQuery('.isotope_container');
        var $search = jQuery('#search');
        $container.isotope('reloadItems');
        $container.isotope('shuffle');
        $search.keyup(function () {
            var qsRegex = new RegExp($search.val(), 'gi');
            $container.isotope({
                filter: function () {
                    return qsRegex ? $(this).text().match(qsRegex) : true;
                }
            });
            $container.isotope('shuffle');
        });

    }
});

