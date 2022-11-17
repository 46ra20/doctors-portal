import React, { createContext } from 'react';
// import {getAuth} from 'firebase/auth'
// import app from '../Firebase/firebase.config';

// const auth = getAuth(app);
export const ContextProvider = createContext();

const UserContext = ({children}) => {
    const userData = 10;
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