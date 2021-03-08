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
   Un = md['name'];
    message = md['message'];
    likes = md['likes'];
    nwt = "<h4>" + Un + "<img class = 'user_tick' src = 'tick.png'></h4>";
    mwt = "<h4 class = 'message_h4'>" + message + "</h4>";
    bwt = "<button class = 'btn btn-warning' id = " + fid + " value = " + likes + " onclick = 'Ul(this.id)'>";
    swt = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: " + likes + "</span></button><hr>";
    row = nwt+mwt+bwt+swt;
    document.getElementById("Output").innerHTML += row;
   //End code
   });});}
   getData();
   function Ul(mid){
    bid = mid;
    likes = document.getElementById("bid").value;
    Nl = Number(likes) + 1;
    firebase.database().ref(room_name).child(md).update({
     likes:Nl
 });
}
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
