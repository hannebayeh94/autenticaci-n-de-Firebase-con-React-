import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



export const appFirebase = firebase.initializeApp({
    "projectId": "fb-auth-tutorial-e3120",
    "appId": "1:851500089034:web:99fa3c1bbb5ad7ecebbe33",
    "storageBucket": "fb-auth-tutorial-e3120.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDTK8B5GEvCCYPESFbz4lYP1TRJAh_yC48",
    "authDomain": "fb-auth-tutorial-e3120.firebaseapp.com",
    "messagingSenderId": "851500089034"
  });