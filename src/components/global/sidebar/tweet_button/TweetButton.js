import React, {useState, useEffect} from 'react';
import './TweetButton.scss';

export default function TweetButton() {
    return (
        <>
            <div className='large_tweet_button'>
                <a href='#' className='blue-button'>Speak</a>
            </div>
        </>
    );
}