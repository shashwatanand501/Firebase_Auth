// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsXwEm3qnlz7NnrW6GjFAPXV9rHhBST6o",
    authDomain: "fir-sm-1ae0a.firebaseapp.com",
    databaseURL: "https://fir-sm-1ae0a.firebaseio.com",
    projectId: "fir-sm-1ae0a",
    storageBucket: "fir-sm-1ae0a.appspot.com",
    messagingSenderId: "706620205918",
    appId: "1:706620205918:web:2a96fff8b24d1f878fbdcf",
    measurementId: "G-8C44073XKE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
