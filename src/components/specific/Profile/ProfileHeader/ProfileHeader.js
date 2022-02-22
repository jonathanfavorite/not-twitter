import React, { useState, useEffect, useContext } from "react";
import "./ProfileHeader.scss";
import { useParams, Link } from "react-router-dom";
import { SignedInUserContext } from "../../../../contexts/SignedInUserDetailsContext";
import { ProfileDetailsContext } from "../../../../contexts/ProfileDetailsContext";
import VerifiedIcon from "../../../global/verified_icon/VerifiedIcon";
import { AppSettingsContext } from "../../../../contexts/AppSettingsContextWrapper";

export default function ProfileBanner() {
    const { username } = useParams();
    const { signedInUserDetails } = useContext(SignedInUserContext);
    const { profileDetails, profileDetailsLoading } = useContext(ProfileDetailsContext);
    const settings = useContext(AppSettingsContext);
 

    const isFollowing = true;

   
  return (
    <>
      <div className="profile_banner_container">
        <div className="profile_banner_image_wrap"></div>
        <div className="profile_banner_details_wrap">
          <div className="profile_image_wrap">
            <div
              className="profile_image"
              style={{
                backgroundImage:
                  `url('${settings.mediaDirectory}/profile/thumbnail/${profileDetails.user.userDetails.profileImage}')`,
              }}
            ></div>
          </div>
          <div className="profile_details_wrap">
            <div className="follow_button_wrap">
              {isFollowing ? (
                <div className="follow_button already_following">Following</div>
              ) : (
                <div className="follow_button">Follow</div>
              )}
            </div>
          </div>
        </div>

        <div className="profile_user_details_wrap">
          <div className="_displayname">
            
            <div>{profileDetails.user.userDetails.firstname} {profileDetails.user.userDetails.lastname}</div>
            <div className="_verified">
              <VerifiedIcon />
            </div>
          </div>
          <div className="_username">@{profileDetails.user.username}</div>
          <div className="_bio">This is the users bio.</div>
          <div className="_notes">
            <div className="_note_indi">
              <div className="_icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="_calendar"
                >
                  <g>
                    <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                    <circle cx="7.032" cy="8.75" r="1.285"></circle>
                    <circle cx="7.032" cy="13.156" r="1.285"></circle>
                    <circle cx="16.968" cy="8.75" r="1.285"></circle>
                    <circle cx="16.968" cy="13.156" r="1.285"></circle>
                    <circle cx="12" cy="8.75" r="1.285"></circle>
                    <circle cx="12" cy="13.156" r="1.285"></circle>
                    <circle cx="7.032" cy="17.486" r="1.285"></circle>
                    <circle cx="12" cy="17.486" r="1.285"></circle>
                  </g>
                </svg>
              </div>
              <span>Joined February 2022</span>
            </div>
          </div>

          <div className="_followstats">
            <div className="_following">
              <Link to="/">
                <b>0</b> Following
              </Link>
            </div>
            <div className="_followers">
              <Link to="/">
                <b>0</b> Followers
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
