import React, { useContext } from 'react';
import { AuthProvider } from '../../ContextApi/ContextApi';

const Login = () => {
    const user = useContext(AuthProvider)
    console.log(user);
    return (
        <div>
            this is loging form
        </div>
    );
};

export default Login;