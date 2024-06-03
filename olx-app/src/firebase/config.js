import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzPPnlXX1cwMy2hKhP1A73kpKcdsTpch0",
    authDomain: "new-project-c7533.firebaseapp.com",
    projectId: "new-project-c7533",
    storageBucket: "new-project-c7533.appspot.com",
    messagingSenderId: "446140565047",
    appId: "1:446140565047:web:0e23bf54190809840e21b2",
    measurementId: "G-3NEGPSBFVB"
  };

export default initializeApp(firebaseConfig)