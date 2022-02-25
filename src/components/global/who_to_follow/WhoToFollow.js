import React, {useState, useEffect, useContext} from 'react';
import Loading from '../Loading/Loading';
import './WhoToFollow.scss';
import WhoToFollowListItem from './WhoToFollowListItem/WhoToFollowListItem';
import { SignedInUserContext } from '../../../contexts/SignedInUserDetailsContext';
import { AppSettingsContext } from '../../../contexts/AppSettingsContextWrapper';

export default function WhoToFollow() {
    const [loading, setLoading] = useState(true);
    const [whoToFollow, setWhoToFollow] = useState([]);
    const userContext = useContext(SignedInUserContext);
    const numberOfFollowersToShow = 5;
    const apiResults = 20;
    const settings = useContext(AppSettingsContext);
    const api = `${settings.endpointPrefix}/user/?method=WhoToFollowForUserID&limit=${apiResults}&userID=${userContext.user.id}`;

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

            for(let i = 0; i < data.response.length; i++)
            {
                //console.log(data.results[i]);
                let holdingObject = {
                    "id": data.response[i].userID,
                    "firstname": data.response[i].firstname,
                    "lastname": data.response[i].lastname,
                    "username": data.response[i].username,
                    "image": `${settings.imageDirectory}/profile/thumbnail/${data.response[i].profileImage}`
                }
                tempArr.push(holdingObject);
            }
            handleSetWhoToFollow(tempArr);
        }
        else
        {
            console.log("error in who to follow");
        }
        setLoading(false);
    }

    useEffect(() => {
        GetWhoToFollow();
        //setLoading(false);
    }, []);

    function handleOnChange(id)
    {
        let oldArr = whoToFollow.filter(item => {
            return item.id !== id;
        });
      
        if(oldArr.length !== 0)
        {
            oldArr.unshift(oldArr.pop())
        }
        setWhoToFollow(oldArr);
    }

    return (
        <>
            <div className='right_sidebar_wrap'>
                <h1>Who to follow</h1>

                <div id='who_to_follow_wrap'>
                    {loading && <Loading />}
                    {
                       
                        whoToFollow.slice(0, numberOfFollowersToShow).map((item, index) => {
                            return <WhoToFollowListItem handleChange={handleOnChange} key={index} details={item} />
                        })
                    }
                    <div  className='wtf_list_item wtf_show_more'>
                            <a className=''>Show more</a>
                        </div>
                    
                </div>

            </div>
        </>
    );
}