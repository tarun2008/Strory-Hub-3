import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAvRlHo-UULqJ-er2rVypAB1_svVa9E1xA",
    authDomain: "story-hub-73ca4.firebaseapp.com",
    databaseURL: "https://story-hub-73ca4.firebaseio.com",
    projectId: "story-hub-73ca4",
    storageBucket: "story-hub-73ca4.appspot.com",
    messagingSenderId: "990136407095",
    appId: "1:990136407095:web:391f41817973ff7444dbb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();