import React, {useState, createContext} from 'react';


const SignedInUserContext = createContext();

function SignedInUserProvider(props) {

    const myPerson = {
        id: 57,
        name: {
            first: "Jonathan",
            last: "Favorite"
        },
        social: {
            email:"jonathanfavorite@hotmail.com",
            phone:2392108816
        },
        details: {
            username: "@jonathanfavorite",
            profileImage: {
                thumb: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
                large: "https://randomuser.me/api/portraits/men/9.jpg"
            }
        }
        
    }
    const [userDetails, setUserDetails] = useState(myPerson);

    function GetFullName()
    {
        return `${userDetails.name.first} ${userDetails.name.last}`;
    }

    const contextList = {
        user: myPerson,
        GetFullName
    }

    return <>
        <SignedInUserContext.Provider value={contextList}>
            {props.children}
        </SignedInUserContext.Provider>
    </>
}

export {SignedInUserContext, SignedInUserProvider}
