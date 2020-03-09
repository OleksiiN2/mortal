import * as firebase from 'firebase/app';
//import 'firebase/app';
//import 'firebase/auth';
import 'firebase/firestore';
//import 'firebase/functions';


const firebaseConfig = {
    apiKey: "AIzaSyAbsS667QRKBJLwk92pnpBGRKOaOBQzB8M",
    authDomain: "mortalcombat-96e2c.firebaseapp.com",
    databaseURL: "https://mortalcombat-96e2c.firebaseio.com",
    projectId: "mortalcombat-96e2c",
    storageBucket: "mortalcombat-96e2c.appspot.com",
    messagingSenderId: "223314844037",
    appId: "1:223314844037:web:4bbda059090d2dacd5ccec"
  };

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();
//const auth = firebase.auth();
//const functions = firebase.functions();
//db.settings({timestampsInSnapshots: true})


//export {db, auth, functions}
export {db}


