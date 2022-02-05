import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useLayoutEffect } from "react";
import { ComposeTweetContext } from "../../../contexts/ComposeTweetContext";
import Loading from "../Loading/Loading";
import Tweet from "../tweet/Tweet";
import "./Timeline.scss";

export default function Timeline() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const composeContext = useContext(ComposeTweetContext);

  function handleSetTweet(tweet)
  {
    setTweets([tweet, ...tweets]);

  }
  const handleSetTweets = (args) => {
    let oldArr = tweets;
    for (let i = 0; i < args.length; i++) {
      oldArr.push(args[i]);
    }
    setTweets(oldArr);
  };

  const timelineEndpoint = 'http://127.0.0.1/not_twitter_api/api/timeline/?userID=57';
  const getTimeLine = async () => {
    let tempHoldingArr = [];
    const response = await fetch(timelineEndpoint);
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        if (data.tweets) {
          data.tweets.forEach((item) => {
            
            let tempObject = {
              details: {
                firstname: item.UserDetails.firstname,
                lastname: item.UserDetails.lastname,
                verified: false,
                username: item.UserDetails.username,
                userimage: item.UserDetails.profileImage
              },
              body: {
                text: item.tweetBody.Body
              },
              metrics: {
                comments: item.Metrics.comments,
                retweets: item.Metrics.comments,
                hearts: item.Metrics.comments,
              }
            };

            tempHoldingArr.push(tempObject);
          });
        }
      }
      else
      {
        console.log('error');
      }
    handleSetTweets(tempHoldingArr);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getTimeLine();
  }, []);

  const AddComposedTweet = async() => {
    handleSetTweet(composeContext.tweetObject);
  }

  useEffect(() => {
    let isFinsihed = false;
    if(composeContext.tweetObject != '')
    {
      AddComposedTweet();
    }
   
   
  },[composeContext.tweetObject])

  return (
    <>
      {loading && <Loading />}
      {
        // <h1>
        //   There are <span>{tweets.length}</span> items in <em>tweets</em>
        // </h1>
      }

      {
       // composeContext.tweetText.body.text && <h1>{composeContext.tweetText.body.text}</h1>
      }

      {tweets &&
        tweets.map((item, index) => {
          return (
            <Tweet
              key={index}
              details={item.details}
              metrics={item.metrics}
              body={item.body}
            />
          );
        })}
    </>
  );
}
