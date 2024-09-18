// In this file we will initialize our firebase database

// Import the functions you need from the SDKs you need
//import { configDotenv } from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
