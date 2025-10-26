import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBzRVTaQAav7gVVBk8sJ4DvOiOAdPUYa20",
  authDomain: "inlaid-stack-473817-h4.firebaseapp.com",
  databaseURL: "https://inlaid-stack-473817-h4-default-rtdb.firebaseio.com",
  projectId: "inlaid-stack-473817-h4",
  storageBucket: "inlaid-stack-473817-h4.firebasestorage.app",
  messagingSenderId: "565359288723",
  appId: "1:565359288723:web:5e84780f39fb9b346fc866"
  measurementId: "G-QVJ5YYEPG5"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

