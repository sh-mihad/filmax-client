import React, { createContext } from 'react';


export const AuthProvider = createContext()

const ContextApi = ({children}) => {

  const userInfo = {
    
  } 

    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextApi;