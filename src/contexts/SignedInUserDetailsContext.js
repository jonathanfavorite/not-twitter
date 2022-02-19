import React, {useState, createContext} from 'react';
import { useEffect } from 'react';

const SignedInUserContext = createContext();

function SignedInUserProvider(props) {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    const login = (user) => {
   
        setUser(user);
        setIsLoggedIn(true);
      };
    
      const logout = () => {
    
        localStorage.removeItem('user');
    
        setUser(null);
        setIsLoggedIn(false);
      };
    
      const checkLoggedIn = async () => {
        let user = localStorage.getItem('user');
        if (user) {
            login(JSON.parse(user));
        }
      };

      function GetFullName()
      {
          return `${user.name.first} ${user.name.last}`;
      }
    
      useEffect(() => {
        checkLoggedIn();
      },[]);

    const contextList = {
        user,
        isLoggedIn,
        login,
        logout,
        GetFullName
    }

    return <>
        <SignedInUserContext.Provider value={contextList}>
            {props.children}
        </SignedInUserContext.Provider>
    </>
}

export {SignedInUserContext, SignedInUserProvider};

