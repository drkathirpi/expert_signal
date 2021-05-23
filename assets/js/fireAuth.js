const firebaseConfig = {
    apiKey: "AIzaSyC2Ge6Bkxgh7O7UlWr4g_sHcrCRsYKo3yo",
    authDomain: "expert-signals-website.firebaseapp.com",
    projectId: "expert-signals-website",
    storageBucket: "expert-signals-website.appspot.com",
    messagingSenderId: "475756382920",
    appId: "1:475756382920:web:32c8c011cc0a744621b3fd",
    measurementId: "G-91GNBL8VXW"
  };

firebase.initializeApp(firebaseConfig);
  firebase.analytics();

firebase.auth.languageCode = 'it';
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
  .signInWithPopup(provider).then((result) => {
    var credential = result.credential;
    var token = result.accessToken;
    var user = result.user;
}).catch((error)=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
})

