import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


 export  const AuthContext= createContext(null)
  const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState (true);

    const googleProvider= new GoogleAuthProvider();

    const createUser= (email,password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword (auth, email,password)
       }
    
       const googleSignIn= () => {
        setLoading(true)
          return signInWithPopup(auth, googleProvider)
       }
    
       const signIn= (email,password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
       }
    
       const logout = () =>{
         setLoading(true)
          return signOut (auth)
       }

       const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
    


        useEffect( ()=> {
           
         const unsubscribe= onAuthStateChanged( auth, (currentUser)=> {
                setUser(currentUser)
                setLoading(false)
              }  );
              return () => {
                return unsubscribe();
              }

        } , [] )


    const authInfo = {
        user, loading,createUser,signIn,logout,googleSignIn,resetPassword,updateUserProfile, setLoading
   }

    return (
        <AuthContext.Provider value={authInfo} >  
            {children}
             </AuthContext.Provider>
    );
};

export default AuthProvider;