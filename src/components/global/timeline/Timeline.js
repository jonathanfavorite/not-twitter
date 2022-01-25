import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Tweet from "../tweet/Tweet";
import "./Timeline.scss";

export default function Timeline() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSetTweets = (args) => {
    let oldArr = tweets;
    for (let i = 0; i < args.length; i++) {
      oldArr.push(args[i]);
    }
    setTweets(oldArr);
  };

  const getAllTweets = async () => {
    let tempHoldingArr = [];
    for (let i = 0; i < 10; i++) {
      const response = await fetch("https://randomuser.me/api/?results=1");
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        if (data !== "") {
          let fakeMetrics = {
            comments: Math.floor(Math.random() * 10000),
            retweets: Math.floor(Math.random() * 10000),
            hearts: Math.floor(Math.random() * 10000),
          };
          let tempObject = {
            details: {
              firstname: data.results[0].name.first,
              lastname: data.results[0].name.last,
              verified: false,
              username: data.results[0].login.username,
              userimage: data.results[0].picture.thumbnail,
            },
            body: {
              text: "",
              image: "",
            },
            metrics: {
              comments: fakeMetrics.comments,
              retweets: fakeMetrics.retweets,
              hearts: fakeMetrics.hearts,
            },
          };

          let randomTextApi =
            "https://hipsum.co/api/?type=hipster-centric&sentences=" +
            Math.floor(Math.random() * 3) +
            1;
          const textResponse = await fetch(randomTextApi);
          if (textResponse.status >= 200 && textResponse.status <= 299) {
            const textResponseData = await textResponse.json();
            if (textResponse) {
              let resp = textResponseData;
              if (textResponseData[0].length >= 180) {
                resp = resp[0].substr(0, 180) + ".";
              }
              tempObject.body.text = resp;

              let includePic =
                Math.floor(Math.random() * 100) % 2 === 0 ? true : false;
              if (includePic) {
                let newWidth = Math.floor(Math.random() * 200) + 500;
                
                tempObject.body.image = `https://picsum.photos/650/400?random=1&t=${Date.now()}`;
              }

              tempHoldingArr.push(tempObject);
            }
          }
        }
      }
    }
    handleSetTweets(tempHoldingArr);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllTweets();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {
        // <h1>
        //   There are <span>{tweets.length}</span> items in <em>tweets</em>
        // </h1>
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
