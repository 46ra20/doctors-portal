import React, { createContext } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const ContextProvider = createContext();

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const logInWithGoogle =() =>{
        return signInWithPopup(auth, googleProvider);
    }

    const userData = {
        logInWithGoogle
    };
    return (
        <ContextProvider.Provider
            value={userData}
        >
            {
                children
            }
        </ContextProvider.Provider>
    );
};

export default UserContext;