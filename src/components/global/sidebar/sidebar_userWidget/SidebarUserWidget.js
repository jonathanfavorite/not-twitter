import React, {useState, useEffect, useContext} from 'react';
import './SidebarUserWidget.scss';
import { SignedInUserContext } from '../../../../contexts/SignedInUserDetails';



export default function SidebarUserWidget() {

    const ctx = useContext(SignedInUserContext);

    return (
        <>
        <div id='sidebar-userWidget'>
            <div className='userWidget-image'>
                <div className='userWidget-image-box' style={{
                    backgroundImage: "url(" + ctx.user.details.profileImage.thumb + ")"
                }}>
                </div>
            </div>
            <div className='userWidget-details'>
                <div className='userWidget-displayname'>{ctx.GetFullName()}</div>
                <div className='userWidget-username'>{ctx.user.details.username}</div>
            </div>
            <div className='userWidget-more'>
                <div className='userWidget-more-icon'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                </div>
            </div>
        </div>
        </>
    );
}