import firebase from 'firebase'
import 'firebase/firebase-firestore'

//firebase initialization
const firebaseConfig = {
    apiKey: "AIzaSyCtusVGxFYAR3jOtJ1dSU3UJtoAS5w_eOs",
    authDomain: "test-blog-1feab.firebaseapp.com",
    databaseURL: "https://test-blog-1feab.firebaseio.com",
    projectId: "test-blog-1feab",
    storageBucket: "test-blog-1feab.appspot.com",
    messagingSenderId: "896310559450",
    appId: "1:896310559450:web:8da5bc3007129ebc731be3",
    measurementId: "G-DRR214K3YL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //firebase utils
  const db = firebase.firestore();
  const auth = firebase.auth();
  const currentUser =  auth.currentUser

  // date issue fix according to firebase
//const settings = {
  //  timestampsInSnapshots: true
//}
//db.settings(settings)

//firebase collections
const usersCollection =  db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection
}