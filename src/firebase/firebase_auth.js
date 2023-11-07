// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, DataSnapshot } from 'firebase/database';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9JTPFDmQEbKDce2wkalsmiGLxonD4Emk",                        //"TU_CLAVE_DE_API_WEB"
  authDomain: "reactnative-app-1629b.firebaseapp.com",                      //"TU_NOMBRE_DEL_PROYECTO.firebaseapp.com"
  databaseURL: "https://reactnative-app-1629b-default-rtdb.firebaseio.com", //"TU_ID_DEL_PROYECTO"
  projectId: "reactnative-app-1629b",                                       //"TU_ID_DEL_PROYECTO"
  storageBucket: "reactnative-app-1629b.appspot.com",                       //"TU_NOMBRE_DEL_PROYECTO.appspot.com"
  messagingSenderId: "959531699675",                                        //"TU_NUMERO_DE_PROYECTO"
  appId: "1:959531699675:web:fec780ed9b441ae0dfebfe",                       //"1:TU_NUMERO_DE_PROYECTO:web:XXXXXXXXXXXX"
  measurementId: "G-9LS5CKPMDP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getDatabase(app);

export const firebase_auth = getAuth(app);
