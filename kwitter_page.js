var firebaseConfig = {
    apiKey: "AIzaSyAXWTOwjExc0BlOx-0Sb5Hdejx2QzrkLis",
    authDomain: "kwitter-417f8.firebaseapp.com",
    databaseURL: "https://kwitter-417f8-default-rtdb.firebaseio.com",
    projectId: "kwitter-417f8",
    storageBucket: "kwitter-417f8.appspot.com",
    messagingSenderId: "742706274017",
    appId: "1:742706274017:web:799d2a5b886c88bcf821a0",
    measurementId: "G-YH4022V19X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class = 'roomname' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div>"
   document.getElementById("Output").innerHTML += row;
   //End code
   });});}
   getData();
   function LogOut(){
    window.location = "kwitter_room.html";
}
function Send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        Message : msg,
        name:username,
        likes:0
    });
    document.getElementById("msg").innerHTML = "";
}
