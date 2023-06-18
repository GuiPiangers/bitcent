import { initializeApp, FirebaseApp } from 'firebase/app'

const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyBNJ-dhfrFMrlqgtuEBcvQbIytH0szUpwI",
    authDomain: "desc-bitcent.firebaseapp.com",
    projectId: "desc-bitcent",
    storageBucket: "desc-bitcent.appspot.com",
    messagingSenderId: "591389067331",
    appId: "1:591389067331:web:12d63feaae6c70980eecf6"
})

export { app }