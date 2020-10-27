import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    //add your config

    }
firebase.initializeApp(config);
firebase.firestore();
//  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
