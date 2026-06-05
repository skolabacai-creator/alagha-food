// تكوين اتصال Firebase الخاص بمطعم الآغا
const firebaseConfig = {
  apiKey: "AIzaSyA2TXDNKVHZDfUUMOMSBX_y2vdU2HL8A_Y",
  authDomain: "alagha-food.firebaseapp.com",
  projectId: "alagha-food",
  storageBucket: "alagha-food.firebasestorage.app",
  messagingSenderId: "339454488601",
  appId: "1:339454488601:web:a3eb5d1a7331e4cc7b7a88",
  measurementId: "G-TDD6J9D50V"
};

// تهيئة تطبيق Firebase
firebase.initializeApp(firebaseConfig);

// تهيئة قاعدة البيانات Firestore
const db = firebase.firestore();
