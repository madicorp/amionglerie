"use strict";

var firebaseConfig = {
    apiKey: "AIzaSyCB9Ar_Smc4f-i7dQYvEMb_G3HSAR_TVyE",
    authDomain: "ami-onglerie.firebaseapp.com",
    databaseURL: "https://ami-onglerie.firebaseio.com",
    projectId: "ami-onglerie",
    storageBucket: "ami-onglerie.appspot.com",
    messagingSenderId: "1091800957494"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.database();