// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyBf6ALcUpLlSTwZJXkvwwd0p7RXEm6hjeA',
    authDomain: 'twitter-823f9.firebaseapp.com',
    projectId: 'twitter-823f9',
    storageBucket: 'twitter-823f9.appspot.com',
    messagingSenderId: '114876979076',
    appId: '1:114876979076:web:c21a899bd3d675ef5b6fd1',
    measurementId: 'G-SGG53KPGJY',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Storage
export const storage = getStorage(app);
