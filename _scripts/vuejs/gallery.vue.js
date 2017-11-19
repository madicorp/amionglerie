'use strict';
var storage = firebaseApp.storage();
var limit = 3;

Vue.component('gallery-item', {
    props: ['item'],
    delimiters: ['<%', '%>'],
    template: '<div class="vertical-item gallery-item content-absolute text-center cs">\
                   <div class="item-media">\
                        <img :src="imgUrl" :alt="src">\
                       <div class="media-links">\
                           <div class="links-wrap">\
                               <a class="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" :href="imgUrl"></a></div>\
                       </div>\
                   </div>\
               </div>',
    data: function () {
        return {imgUrl: ""};
    },
    computed: {
        src: function () {
            console.log(this.item);
            var self = this;
            storage.refFromURL(self.item.image).getDownloadURL().then(function (url) {
                self.imgUrl = url;
            });
            return "";
        }
    },

});

new Vue({
    delimiters: ['<%', '%>'],
    el: '#gallery',
    data: {
        limit: 3,
        busy: false
    },
    firebase: {
        gallery: {
            source: db.ref("gallery"),
            asObject: true,
        }
    },
    methods: {
        loadMore: function () {
            this.busy = true;
            var self = this;
            limit += 2;
            //this.$firebaseRefs.gallery.source = db.ref("gallery").limitToLast(limit);
            /*setTimeout(() => {
                [
                    "/images/gallery/22.jpg",
                    "/images/gallery/02.jpg",
                    "/images/gallery/22.jpg",
                    "/images/gallery/09.jpg",
                    "/images/gallery/09.jpg",
                    "/images/gallery/21.jpg",
                    "/images/gallery/12.jpg"
                ].forEach(function (e) {
                    //self.data.push(e);
                });

                console.log('reload');
                this.busy = false;
            }, 1000);*/
        }
    },
    updated: function () {
        setTimeout(() => {
            var $container = jQuery('.isotope_container');
            $container.isotope('reloadItems').isotope('shuffle');
            jQuery("a[data-filter='*']").click();
            jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
                hook: 'data-gal',
                theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
            });
        }, 1000);
    }
});