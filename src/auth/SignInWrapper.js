import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { SignedInUserContext } from '../contexts/SignedInUserDetailsContext';
import LoginScreen from '../components/specific/Login/LoginScreen';

export default function SignInWrapper(props)
{
    const signedInContext = useContext(SignedInUserContext);
    return (
        <>
            {signedInContext.isLoggedIn ? props.children : <LoginScreen /> }
        </>
    )
}