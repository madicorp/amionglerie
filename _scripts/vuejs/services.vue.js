'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#services',
    firebase: {
        services: {
            source: db.ref("services"),
            asObject: true,
        }
    },
    /*methods:{
        bootstrapClassSplit : function (array, _class) {
            return _class + "-" + Math.floor(12 % array.length);
        }
    }*/
});