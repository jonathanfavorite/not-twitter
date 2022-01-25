import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Location from '../../global/Location/Location';
import ComposeTweetWidget from '../../global/post_tweet_widget/ComposeTweetWidget';
import Tweet from '../../global/tweet/Tweet';
import Loading from '../../global/Loading/Loading';
import Timeline from '../../global/timeline/Timeline';
export default function Dashboard() {

    const [screen, setScreen] = useState(window.innerWidth);
    
    window.addEventListener('resize', () => {
        setScreen(window.innerWidth);
    });

    useEffect(() => {

    }, [screen])

    return (
        <>
            <h1>screen size is: {screen}</h1>
            <Location locationDetails="" />
            <ComposeTweetWidget />
             
            <Timeline />
           
            
            
        </>
    );
}