var provider

document.addEventListener('DOMContentLoaded', function() {

    //initDefaultPage()
    //initDB()
    //updateDB()
    let message = document.getElementById("message")
    provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().onAuthStateChanged(user => {
      if(!user) {
         message.innerHTML("Please log in")
      }
      else {
         message.innerHTML("You are alreay logged in. Click LOGOUT or the HOME icons above.")
      }
    });
  });



function googleSignin() {
    firebase.auth()
    
    .signInWithPopup(provider).then(function(result) {
       var token = result.credential.accessToken;
       var user = result.user;
         
       console.log(token)
       console.log(user.email)
    }).catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
         
       console.log(error.code)
       console.log(error.message)
    });
 }
 
 function googleSignout() {
    firebase.auth().signOut()
     
    .then(function() {
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
 }


