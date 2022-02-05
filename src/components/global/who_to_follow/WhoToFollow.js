import React, {useState, useEffect} from 'react';
import Loading from '../Loading/Loading';
import './WhoToFollow.scss';
import WhoToFollowListItem from './WhoToFollowListItem/WhoToFollowListItem';

export default function WhoToFollow() {
    const [loading, setLoading] = useState(true);
    const [whoToFollow, setWhoToFollow] = useState([]);

    const api = 'https://randomuser.me/api/?results=3';

    function handleSetWhoToFollow(arr)
    {
        let oldArr = whoToFollow;
        for(let i = 0; i < arr.length; i++)
        {
            oldArr.push(arr[i]);
        }
        setWhoToFollow(oldArr);
    }

    const GetWhoToFollow = async () => {
        let tempArr = [];
        const response = await fetch(api);
        if(response.status >= 200 && response.status <= 299)
        {
            const data = await response.json();

            for(let i = 0; i < data.results.length; i++)
            {
                //console.log(data.results[i]);
                let holdingObject = {
                    "firstname": data.results[i].name.first,
                    "lastname": data.results[i].name.last,
                    "username": data.results[i].login.username,
                    "image": data.results[i].picture.thumbnail
                }
                tempArr.push(holdingObject);
            }
            handleSetWhoToFollow(tempArr);
        }
        else
        {
            console.log("error");
        }
        setLoading(false);
    }

    useEffect(() => {
        GetWhoToFollow();
        //setLoading(false);
    }, []);

    return (
        <>
            <div className='right_sidebar_wrap'>
                <h1>Who to follow</h1>

                <div id='who_to_follow_wrap'>
                    {loading && <Loading />}
                    {
                       
                        whoToFollow.map((item, index) => {
                            return <WhoToFollowListItem key={index} details={item} />
                        })
                    }
                    <div  className='wtf_list_item wtf_show_more'>
                            <a href='#' className=''>Show more</a>
                        </div>
                    
                </div>

            </div>
        </>
    );
}