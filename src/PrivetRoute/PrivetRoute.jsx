import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../Components/Form/Login';
import { AuthProvider } from '../ContextApi/ContextApi';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider)
    const location = useLocation()
   if(loading){
    return <p>Loading...</p>
   }

    if(!user?.uid){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;