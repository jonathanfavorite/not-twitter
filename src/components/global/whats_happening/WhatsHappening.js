import React, {useState, useEffect} from 'react';
import './WhatsHappening.scss';
import WhatsHappeningListItem from './WhatsHappeningListItem/WhatsHappeningListItem';

let whatsHappeningList = [
    {
        subtext: "NFL . 1 hour ago",
        text: "Rams at Buccaneers",
        trendingWith: [
            {
                text: 'Superbowl'
            },
            {
                text: '#Bucs'
            }
        ],
        tweets: 293001,
        image: "bucs.jfif"
    },
    {
        subtext: "Politics . Trending",
        text: "Newt Gingrich",
        tweets: 15323
    },
    {
        subtext: "COVID-19 · LIVE",
        text: "COVID-19: News and updates for Florida",
        tweets: 39323,
        image: 'covid.jfif'
    },
    {
        subtext: "Trending in Florida",
        text: "Prevent",
        tweets: 423
    },

]

export default function WhatsHappening() {
    return (
        <>
            <div className='right_sidebar_wrap'>
                <div id='whats_happening_wrap'>
                <h1>What's happening</h1>
                    <div id='whats_happening_list'>

                        {whatsHappeningList.map((item, key) => {
                            return <WhatsHappeningListItem key={key} details={item} />
                        })}

                        <div className='whats_happening_list_item wh_show_more'>
                            <a href='#' className=''>Show more</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}