import React, {useState, useEffect} from 'react';
import './Footer.scss';

export default function Footer() {
    let footerItems = [
        { text: 'Terms of Service', url: '#' },
        { text: 'Privacy Policy', url: '#' },
        { text: 'Cookie Policy', url: '#' },
        { text: 'Accessibility', url: '#' },
        { text: 'Ads info', url: '#' },
        { text: 'More', url: '#' },
    ]
    return (
        <>
            <div className='footer'>
                {
                    footerItems.map((item, index) => {
                        return <a key={index} href={item.url}>{item.text}</a>
                    })
                }
                <div>© 2022 TeamSpeak, Inc.</div>
            </div>
        </>
    );
}