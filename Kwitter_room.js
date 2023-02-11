const firebaseConfig = {
    apiKey: "AIzaSyCu6qfhtl0CS4KO74jx6PiURp8hJzDLW8U",
    authDomain: "anime-app-d8647.firebaseapp.com",
    projectId: "anime-app-d8647",
    storageBucket: "anime-app-d8647.appspot.com",
    messagingSenderId: "1012612022511",
    appId: "1:1012612022511:web:97694321002fcbf2251b1a",
    measurementId: "G-X9KFFHT3WX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
