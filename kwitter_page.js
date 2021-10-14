//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAp-XWasqJfWLNjNZ2iFgPq2fti42m6YMc",
      authDomain: "class94-69c3a.firebaseapp.com",
      databaseURL: "https://class94-69c3a-default-rtdb.firebaseio.com",
      projectId: "class94-69c3a",
      storageBucket: "class94-69c3a.appspot.com",
      messagingSenderId: "147723291656",
      appId: "1:147723291656:web:233daf242bfef64d3555bd",
      measurementId: "G-Z67X4RL7BR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
