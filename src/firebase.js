import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB0PyY5aQPt783vd8Q5SSj1Kpr7KjImrMU',
  authDomain: "shotonzeiss.firebaseapp.com",
  databaseURL: "https://leicasnaps.firebaseio.com",
  projectId: "leicasnaps",
  storageBucket: "leicasnaps.appspot.com",
};

firebase.initializeApp(config)
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleProvider }
