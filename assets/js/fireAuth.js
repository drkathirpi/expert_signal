

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

  var actionCodeSettings = {
 
    url: 'https://www.jesseakoh.com',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    }
  };
  

document.querySelector('#form').addEventListener('submit', (e)=>{
  e.preventDefault();
  var user = document.querySelector('#name').value;
 var mail = document.querySelector('#email').value;

 
firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
.then(() => {
  // The link was successfully sent. Inform the user.
  // Save the email locally so you don't need to ask the user for it again
  // if they open the link on the same device.
  window.localStorage.setItem('emailForSignIn', mail);
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  
 form.reset();
})

if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  var email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  firebase.auth().signInWithEmailLink(email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}