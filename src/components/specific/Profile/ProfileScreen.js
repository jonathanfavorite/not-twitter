import React, { useEffect, useLayoutEffect, useContext } from "react";
import Footer from "../../global/footer/Footer";
import Sidebar from "../../global/sidebar/Sidebar";
import StickySearch from "../../global/sticky_search/StickySearch";
import WhatsHappening from "../../global/whats_happening/WhatsHappening";
import WhoToFollow from "../../global/who_to_follow/WhoToFollow";
import { useParams } from "react-router-dom";
import Location from "../../global/Location/Location";
import { ProfileDetailsContext } from "../../../contexts/ProfileDetailsContext";
import ProfileBanner from "./ProfileHeader/ProfileHeader";
import Loading from "../../global/Loading/Loading";
import Error from "../../global/error/Error";
import { AppSettingsContext } from "../../../contexts/AppSettingsContextWrapper";
export default function ProfileScreen() {
  const { username } = useParams();
  const {
    profileDetails,
    profileDetailsLoading,
    profileDetailsError,
    setProfileDetails,
    setProfileDetailsLoading,
    setProfileDetailsError,
  } = useContext(ProfileDetailsContext);
  const settings = useContext(AppSettingsContext);

  const getProfileDetails = async () => {
    const api = `${settings.endpointPrefix}/user/?method=GetProfile&username=${username}`;
    const response = await fetch(api);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      if (data.error) {
        setProfileDetailsError(true);
      } else {
        console.log(data.response);
        let profileDeets = {
         user : {
           id : data.response.user.ID,
           username: data.response.user.username,
           userDetails: {
             firstname: data.response.user.userDetails.firstname,
             lastname: data.response.user.userDetails.lastname,
             phone: data.response.user.userDetails.phone,
             profileImage: data.response.user.userDetails.profileImage
           }
         },
         details : {
           banner: data.response.details.banner,
           bio : data.response.details.bio,
           notes: data.response.details.notes,
           following : data.response.details.following,
           followers : data.response.details.followers
         },
         isFollowing : data.response.isFollowing,
        };
        return profileDeets;
      }
    } else {
      setProfileDetailsError(true);
    }
  };


  useEffect(() => {
    setProfileDetailsLoading(true);
    let mounted = true;
    (async () => {
      const deets = await getProfileDetails();
      if(mounted && deets != null)
      {
        setProfileDetails(deets);
      }
      setProfileDetailsLoading(false);
    })();
    return () => mounted = false;
  }, [username]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);


  return (
    <>
      <div id="master_container">
        <Sidebar />
        <div id="main_content">
          <div id="main_left">
            {!profileDetailsLoading && profileDetails != null && <Location
              backButtonLocation="/"
              locationDetails={`${profileDetails.user.userDetails.firstname} ${profileDetails.user.userDetails.lastname}`}
            />}
            {profileDetailsLoading && profileDetailsLoading ? (
              <Loading />
            ) : (
              !profileDetailsLoading && !profileDetailsError && 
              <>
                <ProfileBanner />

              </>
            )}

            {profileDetailsError && (
              <Error
                heading="Something went wrong"
                text="Please try again later."
              />
            )}
          </div>
          <div id="main_right">
            <StickySearch />
            <WhatsHappening />
            <WhoToFollow />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
