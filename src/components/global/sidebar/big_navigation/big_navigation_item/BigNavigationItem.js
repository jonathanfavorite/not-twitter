import React, {useState, useEffect, useContext} from 'react';
import './BigNavigationItem.scss';
import { SignedInUserContext } from '../../../../../contexts/SignedInUserDetailsContext';
import {Link} from 'react-router-dom';
export default function BigNavigationItem(props) {
    let circles;
    const {details} = props;
    const signedInUser = useContext(SignedInUserContext);
    if(details.isMore)
    {
        circles = <>
            <circle cx="17" cy="12" r="1.5"></circle>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="7" cy="12" r="1.5"></circle>
        </>
    }
    let hideForMobile = false;
    return (
        <>
           {/* <div className={
               (details.showMobile == false && 'hideMeForMobile ') + 
               (details.onlyMobile == true && 'onlyMobile') + 
               ' big_navigation_indi'
               }> */}
            <div className={
                'sidebaritem_' + details.class + ' ' +
                'big_navigation_indi ' + 
                (details.showOnMobile == false ? 'hideMeForMobile ' : '') +
                (details.onlyDisplayOnMobile ? 'onlyMobile' : '')
            }> 
                <Link to={details.url} className={details.text == "Home" ? "big_navi_active" : ""}>
                    <div className="navi_indi_container">
                <div className='navi_indi_icon'>
                <svg viewBox='0 0 24 24' aria-hidden='true'>
              <g>
                  {circles}
                <path
                  fill='rgb(0, 0, 0)'
                  d={details.iconPath}
                ></path>
              </g>
            </svg>
                </div>

                <div className='navi_indi_text'>
                    {details.text}
                </div>
                </div>
                </Link>
            </div>
        </>
    );
}