// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCtdrw6fo1sHMryV7idYJbtwMqvgudBkDE",
	authDomain: "primecinemas-dae20.firebaseapp.com",
	projectId: "primecinemas-dae20",
	storageBucket: "primecinemas-dae20.firebasestorage.app",
	messagingSenderId: "944312518456",
	appId: "1:944312518456:web:b7051e3fa6af6f2c1a23cd",
	measurementId: "G-8H9GQ79T8D",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
