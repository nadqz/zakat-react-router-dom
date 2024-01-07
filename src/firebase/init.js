// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import config from './config.json'
import {getFirestore} from "firebase/firestore"

const {
    apiKey, 
    appId, 
    authDomain, 
    measurementId, 
    messagingSenderId, 
    projectId,
    storageBucket
} = config;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()