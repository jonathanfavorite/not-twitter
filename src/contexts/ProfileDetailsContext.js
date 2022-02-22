import React, {createContext, useState, useEffect} from 'react'

const ProfileDetailsContext = createContext();

function ProfileDetailsProvider(props) {
    const [profileDetails, setProfileDetails] = useState();
    const [profileDetailsLoading, setProfileDetailsLoading] = useState(true);
    const [profileDetailsError, setProfileDetailsError] = useState(false);

    useEffect(() => {
        if(profileDetails === null)
        {
            let profileDeets = {
                user : {
                  id : 0,
                  username: null,
                  userDetails: {
                    firstname: null,
                    lastname: null,
                    phone: null,
                    profileImage: null
                  }
                },
                details : {
                  banner: null,
                  bio : null,
                  notes: null,
                  following : null,
                  followers : null
                },
                isFollowing : null
               };
               setProfileDetails(profileDeets);
        }
    },[]);
    function getFullName()
    {
        return profileDetails.user.userDetails.firstname + " " + profileDetails.user.userDetails.lastname;
    }
    const detailsObject = {
        profileDetails,
        profileDetailsLoading,
        profileDetailsError,
        setProfileDetails,
        setProfileDetailsLoading,
        setProfileDetailsError,
        getFullName
    }

    return (
    <ProfileDetailsContext.Provider value={detailsObject}>
        {props.children}
    </ProfileDetailsContext.Provider>
    )
}

export {ProfileDetailsContext, ProfileDetailsProvider};