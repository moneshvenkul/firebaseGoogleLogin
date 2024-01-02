import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState();

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserAuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </UserAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}
