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
    window.location = "index2.html";
}
var n = 0;
function addRoom(){
  password = document.getElementById("Password").value;
  if(password.length == 0){
  }else{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").update({
      purpose:"adding room name"
    });
    localStorage.setItem("roomname",room_name);
    window.location = "kwitter_page.html";
  }  
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",roomname);
  window.location= "kwitter_page.html";
}
