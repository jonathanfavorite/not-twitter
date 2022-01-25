import React, {useState, useEffect} from 'react';
import Logo from '../logo/Logo';
import './Sidebar.scss';
import BigNaviation from './big_navigation/BigNaviation';
import SidebarUserWidget from './sidebar_userWidget/SidebarUserWidget';



export default function Sidebar() {
    return (
        <>
        <div id='sidebar_container'>
            <div id='sidebar_hidden'></div>
            <div id='sidebar'>
                <div className='sidebar-item sidebar-upper'>
                   <Logo />
                   <BigNaviation />
                </div>
                <div className='sidebar-item sidebar-bottom'>
                    <SidebarUserWidget />
                </div>
            </div>
          </div>
        </>
    );
}