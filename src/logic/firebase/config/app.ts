import { initializeApp, FirebaseApp } from 'firebase/app'

const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyBNJ-dhfrFMrlqgtuEBcvQbIytH0szUpwI",
    authDomain: "desc-bitcent.firebaseapp.com",
    projectId: "desc-bitcent"
})

export { app }