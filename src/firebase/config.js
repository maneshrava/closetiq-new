
import { initializeApp } from "firebase/app"

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4G6VrN9CcRVUQ1ZyxTRewOvk2Jiar5RU",
  authDomain: "closetiq-eed32.firebaseapp.com",
  projectId: "closetiq-eed32",
  storageBucket: "closetiq-eed32.firebasestorage.app",
  messagingSenderId: "138115356916",
  appId: "1:138115356916:web:ef95c080c0edbb5d2826a1"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const googleProvider =
  new GoogleAuthProvider()

export default app

