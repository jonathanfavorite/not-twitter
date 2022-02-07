import React, {useState, createContext} from 'react';
import { useEffect } from 'react';


const SignedInUserContext = createContext();




function SignedInUserProvider(props) {

    const [isCached, setIsCached] = useState(false);
    const [userLoaded, setUserLoaded] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    

//   useEffect(() => {
//     const myPerson = {
//         id: 57,
//         name: {
//             first: "Jonathan",
//             last: "Favorite"
//         },
//         social: {
//             email:"jonathanfavorite@hotmail.com",
//             phone:2392108816
//         },
//         details: {
//             username: "@jonathanfavorite",
//             profileImage: {
//                 thumb: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
//                 medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
//                 large: "https://randomuser.me/api/portraits/men/9.jpg"
//             }
//         }
        
//     }

//     setUserDetails(myPerson);
//   }, []);    


    function handleSetIsCached(bool) {
        setIsCached(bool);
    }
    function handleSetUserLoaded(bool) {
        setUserLoaded(bool);
      }

    function handleSetUserDetails(user)
    {
        setUserDetails(user);
    }
    function GetFullName()
    {
        return `${userDetails.name.first} ${userDetails.name.last}`;
    }

    const contextList = {
        user: userDetails,
        GetFullName,
        SetUser: handleSetUserDetails,
        SetCached: handleSetIsCached,
        IsCached: isCached,
        userLoaded,
        handleSetUserLoaded
    }

    return <>
        <SignedInUserContext.Provider value={contextList}>
            {props.children}
        </SignedInUserContext.Provider>
    </>
}

export {SignedInUserContext, SignedInUserProvider}
