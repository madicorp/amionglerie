"use strict";var storage=firebaseApp.storage(),limit=3;Vue.component("gallery-item",{props:["item"],delimiters:["<%","%>"],template:'<div class="vertical-item gallery-item content-absolute text-center cs">                   <div class="item-media">                        <img :src="imgUrl" :alt="src">                       <div class="media-links">                           <div class="links-wrap">                               <a class="p-view prettyPhoto " title="" data-gal="prettyPhoto[gal]" :href="imgUrl"></a></div>                       </div>                   </div>               </div>',data:function(){return{imgUrl:""}},computed:{src:function(){console.log(this.item);var e=this;return storage.refFromURL(e.item.image).getDownloadURL().then(function(t){e.imgUrl=t}),""}}}),new Vue({delimiters:["<%","%>"],el:"#gallery",data:{limit:3,busy:!1},firebase:{gallery:{source:db.ref("gallery"),asObject:!0}},methods:{loadMore:function(){this.busy=!0;limit+=2}},updated:function(){setTimeout(function(){jQuery(".isotope_container").isotope("reloadItems").isotope("shuffle"),jQuery("a[data-filter='*']").click(),jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook:"data-gal",theme:"facebook"})},1e3)}});