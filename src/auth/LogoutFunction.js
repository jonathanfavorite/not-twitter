import React, { useContext, useEffect} from 'react';
import { SignedInUserContext } from '../contexts/SignedInUserDetailsContext';
export default function LogoutFunction() {
    const context = useContext(SignedInUserContext);
    useEffect(() => {
        context.logout();
        window.location.href = '/login';
    },[]);
  return null;
}
