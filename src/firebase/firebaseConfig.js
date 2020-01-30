import firebase from 'firebase'
import 'firebase/firebase-firestore'

//firebase initialization
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain.firebaseapp.com",
    databaseURL: "https://your-database.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //firebase utils
  const db = firebase.firestore();
  const storage = firebase.storage;
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
    commentsCollection,
    storage
}
