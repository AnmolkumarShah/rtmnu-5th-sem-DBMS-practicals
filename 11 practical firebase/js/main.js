  var firebaseConfig = {
    apiKey: "AIzaSyDIEHoeKKwBGA0Q36ztCp8_0eUsdSHiMW0",
    authDomain: "fir-connect-97adb.firebaseapp.com",
    databaseURL: "https://fir-connect-97adb-default-rtdb.firebaseio.com",
    projectId: "fir-connect-97adb",
    storageBucket: "fir-connect-97adb.appspot.com",
    messagingSenderId: "29213203484",
    appId: "1:29213203484:web:bf887a81adc0a1119693d9",
    measurementId: "G-YQ8P74PYVS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Reference messages collection
var messagesRef = firebase.database().ref('fir-connect-97adb-default-rtdb');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});

console.log("Started");