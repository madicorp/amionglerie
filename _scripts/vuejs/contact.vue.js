'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#contact',
    data:{
        contact: {
            senegal: {
                contact: "",
                address: "",
                phone: "",
                email: ""
            },
            suisse: {
                contact: "",
                address: "",
                phone: "",
                email: ""
            }
        }
    },
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