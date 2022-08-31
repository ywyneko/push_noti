// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyCWDyTmXXh6e6P7EqK2lOrLFWBaGuxSZd0",
    authDomain: "catbox-73898.firebaseapp.com",
    databaseURL: 'https://catbox-73898.firebaseio.com',
    projectId: "catbox-73898",
    storageBucket: "catbox-73898.appspot.com",
    messagingSenderId: "754391847527",
    appId: "1:754391847527:web:0569307d89406fb5a07ac2",
    measurementId: "G-1M4QM8MRC7"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});


