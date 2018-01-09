'use strict';

new Vue({
    delimiters: ['<%', '%>'],
    el: '#contact',
    data: {
        form: {
            name: "",
            phone: "",
            email: "",
            objet: "",
            message: "",
            response: ""
        },
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
    methods: {
        onSubmit: function (event) {
            let $spiner = $(".ajax-loader");
            let $submitButton = $("#contact_form_submit");
            $submitButton.attr('disabled', 'disabled');
            $spiner.addClass("is-active");
            let that = this;
            let form = this.form;
            Email.send(form.email,
                "segito10@gmail.com",
                form.objet,
                `<strong>formulaire du site amionglerie</strong> \n \
                <strong>nom</strong> : ${form.name}\n \
                <strong>telephone</strong>: ${form.phone}\n \
                <strong>message</strong>: \n \
                ${form.message}`,
                {
                    token: "cd061c8a-391b-4353-bd0a-ea1db89a48cb",
                    callback: function done(message) {
                        if (message === "OK") {
                            that.form = {
                                name: "",
                                phone: "",
                                email: "",
                                objet: "",
                                message: "",
                            };
                            message = "Votre message a été envoyé avec succes ! Notre équipe vous répondra très bientot .";
                        }
                        that.form.response = message;
                        $spiner.removeClass("is-active");
                        $submitButton.removeAttr('disabled');
                    }
                }
            );
        }
    }
});


