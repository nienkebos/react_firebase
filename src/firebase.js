import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCGuQWghaSuTO7EPA_oJFhlFFhGyIYLPBw',
    authDomain: 'my-app-15beb.firebaseapp.com',
    databaseURL: 'https://my-app-15beb.firebaseio.com',
    projectId: 'my-app-15beb',
    storageBucket: 'my-app-15beb.appspot.com',
    messagingSenderId: '167787124773'
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();