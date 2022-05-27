var provider

document.addEventListener('DOMContentLoaded', function() {

    //initDefaultPage()
    //initDB()
    //updateDB()
    provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
         loadPrivate()
         
      }
      else {
         loadPublic()
         //window.location = 'login.html'; //If User is not logged in, redirect to login page
      }
    });
  });

function showBookingDoc() {
   let bookingDocURL = "https://docs.google.com/document/d/1mp4raxnl3NcVV35BMiVpcGf11Y7paPES"
   console.log("Showing bookings doc")
}

function loadPrivate() {
   console.log("Loading Main page")
}


function loadPublic() {
   console.log("Loading Main page")
}


function googleUser() {
   var user = null

   try {
      user = firebase.auth().currentUser
      console.log(user.email)
   }
   catch {
      console.log ("No one logged in")
   }

}


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




function initDB() {
    var playersRef = firebase.database().ref("players/");

    playersRef.set ({
       John: {
          number: 1,
          age: 22
       },
        
       Amanda: {
          number: 2,
          age: 23
       }
    });
}

function updateDB() {
    var johnRef = firebase.database().ref("players/John");

    johnRef.update ({
       "number": 22
    });

}



function initDefaultPage() {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { console.log(user) });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.firestore().doc('/foo/bar').get().then(() => { });
    // firebase.functions().httpsCallable('yourFunction')().then(() => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    // firebase.analytics(); // call to activate
    // firebase.analytics().logEvent('tutorial_completed');
    // firebase.performance(); // call to activate
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
}

