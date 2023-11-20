// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5osltiZ0cqibWUAniRhqoMNHx6sy6sGQ',
  authDomain: 'e-commerce-app-10f97.firebaseapp.com',
  projectId: 'e-commerce-app-10f97',
  storageBucket: 'e-commerce-app-10f97.appspot.com',
  messagingSenderId: '989533800257',
  appId: '1:989533800257:web:29700b6228419b149e03c0',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
