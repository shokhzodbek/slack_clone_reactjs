import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyAogGTCp_-iXAYKcZlmmmY_It8qvDvLaXw",
      authDomain: "spotify-7ab9a.firebaseapp.com",
      projectId: "spotify-7ab9a",
      storageBucket: "spotify-7ab9a.appspot.com",
      messagingSenderId: "244666488971",
      appId: "1:244666488971:web:c63f0797821724bc595c8e",
      measurementId: "G-XTWX2F86TS"
    };


const firebaaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
export {db,auth,provider}
