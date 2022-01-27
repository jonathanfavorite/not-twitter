import React, { useState, useEffect } from "react";
import VerifiedIcon from "../../verified_icon/VerifiedIcon";
import "./WhoToFollowListItem.scss";

export default function WhoToFollowListItem(props) {
    const {details} = props;
  return (
    <>
      <div className="who_to_follow_indi">
        <div className="wtf_image_wrap">
          <div className="wtf_image" style={{
                  backgroundImage: "url(" + details.image + ")",
                }
          }></div>
        </div>
        <div className="wtf_desc">
          <div className="_desc-name">
            <a href="#">{details.firstname} {details.lastname}</a>
            <div className='_desc-verified'>
                <VerifiedIcon />
            </div>
          </div>
          <div className="_desc-username">@{details.username}</div>
        </div>
        <div className="wtf_follow_wrap">
          <a href="#">Follow</a>
        </div>
      </div>
    </>
  );
}
