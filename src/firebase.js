import firebase from 'firebase/app';
import 'firebase/auth';

export const auth =  firebase.initializeApp({
    apiKey: "AIzaSyArw0o0rQ3gbfVbqch3kOiDDvUEo5fh3t8",
    authDomain: "crypto-chat-1ffe8.firebaseapp.com",
    projectId: "crypto-chat-1ffe8",
    storageBucket: "crypto-chat-1ffe8.appspot.com",
    messagingSenderId: "1069462747403",
    appId: "1:1069462747403:web:66f50ad27531c2f7a04a0e"
  }).auth();