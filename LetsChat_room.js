// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFgyiMIgrZQiOikSABY5xFeSr6eJx3lPs",
    authDomain: "letschat-app-4cf0b.firebaseapp.com",
    databaseURL: "https://letschat-app-4cf0b-default-rtdb.firebaseio.com",
    projectId: "letschat-app-4cf0b",
    storageBucket: "letschat-app-4cf0b.appspot.com",
    messagingSenderId: "559987712549",
    appId: "1:559987712549:web:efebbe4c308e4347e9d5cc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom()
    {
       room_name=document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"

       });
            localStorage.setItem("room_name", room_name);
            window.location="LetsChat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

          console.log("room_name- " + Room_names);
          row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
      
       function redirectToRoomName(name)
       {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location="LetsChat_page.html";
       }

function logout()
{
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
};
