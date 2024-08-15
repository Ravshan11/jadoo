// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSSCUFCqO9AoHdFIhxjDd2Lee6oXHrmRc",
    authDomain: "data-4be38.firebaseapp.com",
    databaseURL: "https://data-4be38-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "data-4be38",
    storageBucket: "data-4be38.appspot.com",
    messagingSenderId: "332945660890",
    appId: "1:332945660890:web:96d3d27d4823da618ffee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.getElementById("submit1").addEventListener('click', function (e) {
    e.preventDefault()

    set(ref(db, 'booking/' + document.getElementById("name").value),
        {

            name: document.getElementById("name").value,
            number: document.getElementById("number").value,
            date_1: document.getElementById("data").value,
            data_2: document.getElementById("data1").value
        })

    alert("Login Sucessfull   !")
})
document.getElementById("submit2").addEventListener('click', function (e) {
  e.preventDefault()

  set(ref(db, 'subscribe/' + document.getElementById("text_1").value),
      {
        subscribe: document.getElementById("text_1").value
      })

  alert("Login Sucessfull   !")
})
