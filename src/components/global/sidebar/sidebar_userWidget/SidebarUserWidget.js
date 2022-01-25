import React, {useState, useEffect} from 'react';
import './SidebarUserWidget.scss';

export default function SidebarUserWidget() {
    return (
        <>
        <div id='sidebar-userWidget'>
            <div className='userWidget-image'>
                <div className='userWidget-image-box'>
                </div>
            </div>
            <div className='userWidget-details'>
                <div className='userWidget-displayname'>Jonathan Favorite</div>
                <div className='userWidget-username'>@jonathanfavorite</div>
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