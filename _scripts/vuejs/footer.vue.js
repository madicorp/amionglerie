'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#footer',
    data:{
        footer: {
            description:""
        }
    },
    firebase: {
        footer: {
            source: db.ref("footer"),
            asObject: true,
        }
    },
    /*methods:{
        bootstrapClassSplit : function (array, _class) {
            return _class + "-" + Math.floor(12 % array.length);
        }
    }*/
});

