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
            <div class='footer'>
                {
                    footerItems.map(item => {
                        return <a href={item.url}>{item.text}</a>
                    })
                }
                <div>© 2022 Not Twitter, Inc.</div>
            </div>
        </>
    );
}