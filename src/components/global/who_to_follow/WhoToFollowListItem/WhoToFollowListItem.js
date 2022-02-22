import React, { useState, useEffect, useRef, useContext } from "react";
import VerifiedIcon from "../../verified_icon/VerifiedIcon";
import "./WhoToFollowListItem.scss";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { SignedInUserContext } from "../../../../contexts/SignedInUserDetailsContext";
import { AppSettingsContext } from "../../../../contexts/AppSettingsContextWrapper";
export default function WhoToFollowListItem(props) {
  const { details, handleChange } = props;
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const followButtonRef = useRef();
  const userContext = useContext(SignedInUserContext);
  const settings = useContext(AppSettingsContext);

  const sendFollowRequest = async () => {
    if (!disabled) {
      setLoading(true);
      setDisabled(true);
      const api = `${settings.endpointPrefix}/user/?fromID=${userContext.user.id}&method=SendFollowRequest&toID=${details.id}`;
      const response = await fetch(api);
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        if (data.error) {
          console.log("who to follow list item data error");
        } else {
          setLoading(false);
          setComplete(true);
        }
      } else {
        console.log(response);
      }
    }
  };

  useEffect(() => {
    let timeout;
    if (complete) {
      timeout = setTimeout(() => {
        setDisabled(false);
        setComplete(false);
        handleChange(details.id);
      }, 500);
    }
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className={`who_to_follow_indi${complete ? " slowfade" : ""}`}>
        <div className="wtf_image_wrap">
          <Link to={`/${details.username}`}>
            <div
              className="wtf_image"
              style={{
                backgroundImage: "url(" + details.image + ")",
              }}
            ></div>
          </Link>
        </div>
        <div className="wtf_desc">
          <div className="_desc-name">
            <Link to={`/${details.id}`}>
              {details.firstname} {details.lastname}
            </Link>
            <div className="_desc-verified">
              <VerifiedIcon />
            </div>
          </div>
          <div className="_desc-username">@{details.username}</div>
        </div>
        <div className="wtf_follow_wrap">
          <span onClick={sendFollowRequest} ref={followButtonRef}>
            {loading && (
              <div className="little_spinner">
                <Loading />
              </div>
            )}
            Follow
          </span>
        </div>
      </div>
    </>
  );
}
