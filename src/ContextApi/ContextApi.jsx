import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../Firebase/firebase.config.js';

const auth = getAuth(app)
export const AuthProvider = createContext()


const ContextApi = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // userOvserver
    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth,(loogedUser)=>{
            setUser(loogedUser)
            setLoading(false)
        })

        return ()=>{
            unsbscribe()
        }
    },[])

    // login with form
    const loginWithForm =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //register with form
    const registerWithForm = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login with Goole Pop-Up
    const googleProvider = new GoogleAuthProvider()
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    } 

    // logout 
    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }



  const userInfo = {
    user,
    loading,
    loginWithForm,
    registerWithForm,
    googleLogin,
    logout
  } 

    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextApi;