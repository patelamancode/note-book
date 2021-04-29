import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage';


const firebase = require('firebase');
require('firebase/firestore');


 const firebaseConfig = {
      apiKey: "AIzaSyCLkY4j10jGvltGG9pVc34_f39mVv7ROYM",
      authDomain: "ever-note-clone-92909.firebaseapp.com",
      projectId: "ever-note-clone-92909",
      storageBucket: "ever-note-clone-92909.appspot.com",
      messagingSenderId: "862895113586",
      appId: "1:862895113586:web:288e146e1984c76830c9eb",
      measurementId: "G-2WGZ7LZDGK"
    };

// initiallize app
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />,document.getElementById('evernote-container'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

