import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};


const app = initializeApp(firebaseConfig);

if(!getApps().length) {
    initializeApp(firebaseConfig)
}

export const firebaseAuth = getAuth()
export const authentication = () => {
    return firebaseAuth
}

export const SignUp = async (email, password) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
}

export const SignOut = async () => {
    await signOut(firebaseAuth)
}

export const GetSignInErrorMessage = (code) => {
    switch (code) {
        case 'auth/invalid-login-credentials':
            return 'Email not registered'
            break;
        case 'auth/user-not-found':
            return 'Email not registered'
            break;
        case 'auth/wrong-password':
            
        default:
            return 'Incorrect email or password'
    }
}

export const GetSignUpErrorMessage = (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return 'Email has been registered'            
        default:
            return 'An error occurred during the sign up process'
    }
}