import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Location from '../../components/global/Location/Location';
import ComposeTweetWidget from '../../components/global/post_tweet_widget/ComposeTweetWidget';
import Tweet from '../../components/global/tweet/Tweet';
import Loading from '../../components/global/Loading/Loading';
import Timeline from '../../components/global/timeline/Timeline';
export default function Dashboard() {

    return (
        <>
            <Location locationDetails="" />
            <ComposeTweetWidget />
            <Timeline />
           
            
            
        </>
    );
}