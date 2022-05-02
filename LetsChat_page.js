
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDRG4qbu__CIqACZASuRbY0tn320ja6mU0",
      authDomain: "letschat-3a0fe.firebaseapp.com",
      projectId: "letschat-3a0fe",
      storageBucket: "letschat-3a0fe.appspot.com",
      messagingSenderId: "687648045820",
      appId: "1:687648045820:web:8ed32f4ebd3a2231e6b579",
      measurementId: "G-9VDJ2XXTKH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.getAnalytics(app);

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");

     function send()
     {
           msg=document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name: user_name,
                 message: msg,
                 like: 0
           });

           document.getElementById("msg").value="";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         names=message_data["name"];
         message=message_data["message"];
         likes=message_data["like"];
         name_with_tag="<h4>" + names + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
         like_btn="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + " onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : " + likes + "</span></button><hr>";
         row=name_with_tag + message_with_tag + like_btn + span_with_tag;
         document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
      {
           console.log("Clicked on the like button - " + message_id);
           btn_id=message_id;
           likes_value=document.getElementById(btn_id).value;
           updated_likes=Number(likes_value) + 1;
           console.log(updated_likes);
           firebase.database().ref(room_name).child(message_id).update({
                 like : updated_likes
           });
      }

function logOut()
      {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
      }


function leave()
{
           window.location="LetsChat_room.html";
}
