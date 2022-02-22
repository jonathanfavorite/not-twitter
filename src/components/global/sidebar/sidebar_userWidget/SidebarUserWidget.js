import React, { useState, useEffect, useRef, useContext } from "react";
import "./SidebarUserWidget.scss";
import { SignedInUserContext } from "../../../../contexts/SignedInUserDetailsContext";
import SideBarUserWidgetDetails from "./SideBarUserWidgetDetails/SideBarUserWidgetDetails";
import { Link } from "react-router-dom";

export default function SidebarUserWidget() {
  const ctx = useContext(SignedInUserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const popupRef = useRef();
  const widgetMainRef = useRef();

  document.addEventListener("mousedown", handleOnBlur);

  function handleOnBlur(event) {
    if (popupRef.current && modalOpen && !popupRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  }

  return (
    <>
      <div id="sidebar-userWidget" className={
      modalOpen ? 'no-hover' : ''
      }>
      {modalOpen && 
        <div id="sidebar-details-user-widget" ref={popupRef}>
          <div className="sidebar-details-widget" >
            <SideBarUserWidgetDetails ctx={ctx} />
          </div>
          <div className="sidebar-details-action-links">
            <div className="sidebar-details-link">
              <Link to="/logout">Log out {ctx.user.details.username}</Link>
            </div>
          </div>
          <div className="arrow">
            <svg fill="#fff" viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"></path>
              </g>
            </svg>
          </div>
        </div>
}
        <div className="sidebar-details-widget_main" onClick={() => {setModalOpen(open => !modalOpen)}} ref={widgetMainRef}>
          <SideBarUserWidgetDetails ctx={ctx} displayElipses={true} />
        </div>
      </div>
    </>
  );
}
