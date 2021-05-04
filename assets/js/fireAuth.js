

var firebaseConfig = {
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

 

document.querySelector('#form').addEventListener('submit', (e)=>{
  e.preventDefault();
  var user = document.querySelector('#name').value;
 var mail = document.querySelector('#email').value;
  
 form.reset();
})