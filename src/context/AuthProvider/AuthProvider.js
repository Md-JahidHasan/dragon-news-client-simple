import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   


    const providerLogin =(provider)=>{
        return signInWithPopup(auth, provider)
    }
    const logOut =() =>{
        return signOut(auth);
    }
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const [user, setUser]= useState(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, providerLogin, setUser, logOut, createUser, emailLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;