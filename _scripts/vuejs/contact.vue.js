'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#contact',
    firebase: {
        contact: {
            source: db.ref("contact"),
            asObject: true,
        }
    },
    /*methods:{
        bootstrapClassSplit : function (array, _class) {
            return _class + "-" + Math.floor(12 % array.length);
        }
    }*/
});