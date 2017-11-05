'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#home',
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