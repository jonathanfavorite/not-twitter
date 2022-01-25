import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Location from '../../global/Location/Location';
import ComposeTweetWidget from '../../global/post_tweet_widget/ComposeTweetWidget';
import Tweet from '../../global/tweet/Tweet';
import Loading from '../../global/Loading/Loading';
import Timeline from '../../global/timeline/Timeline';
export default function Dashboard() {
    return (
        <>
            <Location locationDetails="" />
            <ComposeTweetWidget />
             
            <Timeline />
           
            
            
        </>
    );
}