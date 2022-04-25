import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHgQO7dS2jMShlxbDNwcZhM1zhuUJiMow",
    authDomain: "embassyofnigeriaalgiers.firebaseapp.com",
    projectId: "embassyofnigeriaalgiers",
    storageBucket: "embassyofnigeriaalgiers.appspot.com",
    messagingSenderId: "247220645310",
    appId: "1:247220645310:web:a74d0b806defdcf5b99def",
    measurementId: "G-WSQFQ7PNB5"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);