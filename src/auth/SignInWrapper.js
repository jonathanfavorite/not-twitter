import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { SignedInUserContext } from '../contexts/SignedInUserDetailsContext';

export default function SignInWrapper(props)
{
    const signedInContext = useContext(SignedInUserContext);
    return !signedInContext.user ? <Navigate to='/login' /> : props.children;
}