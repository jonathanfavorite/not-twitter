import React, {useState, useEffect} from 'react';
import './BigNavigationItem.scss';


export default function BigNavigationItem(props) {
    let circles;
    const {details} = props;
    if(details.isMore)
    {
        circles = <>
            <circle cx="17" cy="12" r="1.5"></circle>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="7" cy="12" r="1.5"></circle>
        </>
    }
    return (
        <>
           <div className='big_navigation_indi'>
                <a href={details.url} className={details.text == "Home" ? "big_navi_active" : ""}>
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
                </a>
            </div>
        </>
    );
}