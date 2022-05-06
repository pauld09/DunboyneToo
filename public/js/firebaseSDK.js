// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyALYEiyxSG2Lyyvs1P6lrvphGkiOc0mopk",
authDomain: "dunboyne-too-homepage.firebaseapp.com",
databaseURL: "https://dunboyne-too-homepage-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "dunboyne-too-homepage",
storageBucket: "dunboyne-too-homepage.appspot.com",
messagingSenderId: "300156802934",
appId: "1:300156802934:web:948cad4e7a4e929a918c57",
measurementId: "G-JM7EKWS9BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
