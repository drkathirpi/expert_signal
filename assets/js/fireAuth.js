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


  firebase.auth().languageCode = 'it';



window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    }).catch((error) => {
    });

    const code = getCodeFromUserInput();
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});

var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
firebase.auth().signInWithCredential(credential);
