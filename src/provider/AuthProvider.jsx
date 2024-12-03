/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in user with email and password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //logOut user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update user profile
    const profileUpdated = (name, photoURL) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photoURL
        })
    }

    //display user info
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        logIn,
        profileUpdated,
        logOut
    }
    
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider
