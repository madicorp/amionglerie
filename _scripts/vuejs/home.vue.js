'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#home',
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
    /*methods:{
        bootstrapClassSplit : function (array, _class) {
            return _class + "-" + Math.floor(12 % array.length);
        }
    }*/
});