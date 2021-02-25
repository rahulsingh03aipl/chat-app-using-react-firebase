import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAoXBCz-rclylCRMI4fPF199rPyZVrrHg4",
    authDomain: "chat-app-208eb.firebaseapp.com",
    databaseURL: "https://chat-app-208eb-default-rtdb.firebaseio.com",
    projectId: "chat-app-208eb",
    storageBucket: "chat-app-208eb.appspot.com",
    messagingSenderId: "253154457446",
    appId: "1:253154457446:web:697defd27d7ea2ae157aa7",
    measurementId: "G-4TECWJR2T8"
};
// Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 export default firebaseApp;


