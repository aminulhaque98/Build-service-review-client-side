import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const toggleTheme = () => {
        setTheme((curr) => (curr === "bg-inherit" ? "bg-black" : "bg-inherit"))
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }


    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('services-token');
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = { user, loading, toggleTheme, createUser, signInUser, setLoading, updateUserProfile, logOut, providerLogin }
    return (
        <div className={theme}>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;