
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5jCm1m7EeNyhqnGONHp9UBSAv3BFYjKY",
    authDomain: "technolabs-49e14.firebaseapp.com",
    databaseURL: "https://technolabs-49e14.firebaseio.com",
    projectId: "technolabs-49e14",
    storageBucket: "technolabs-49e14.appspot.com",
    messagingSenderId: "699305030708",
    appId: "1:699305030708:web:ff09367be2f2f54a7c0661",
    measurementId: "G-KE7M6NTGJQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var country = getInputVal('country');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var city = getInputVal('city');
  var college = getInputVal('college');
  var resume = getInputVal('resume');
  var marksheet = getInputVal('marksheet');

  // Save message
  saveMessage(name, college, email, phone, country, city, resume, marksheet)

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name, college, email, phone, country, city, resume, marksheet){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    college:college,
    email:email,
    phone:phone,
    country:country,
    city:city,
    resume:resume,
    marksheet:marksheet
  });
}