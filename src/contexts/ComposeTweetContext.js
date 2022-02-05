import React, {useState, createContext} from 'react';

const ComposeTweetContext = createContext();

function ComposeTweetProvider(props)
{
    const [tweetLoading, setTweetLoading] = useState(false);
    const [tweet, setTweet] = useState("");
    function clearTweet()
    {
        setTweet("");
    }
    function handleTweetLoading(bool)
    {
        setTweetLoading(bool);
    }
    function handleSetTweet(_tweet)
    {
        setTweet(_tweet);
    }
    const contextList = {
        tweetObject: tweet,
        isTweetLoading: tweetLoading,
        handleTweetLoading: handleTweetLoading,
        handleSetTweet: handleSetTweet,
        clearTweets: clearTweet
    }
    return <>
        <ComposeTweetContext.Provider value={contextList}>
            {props.children}
        </ComposeTweetContext.Provider>
    </>
}

export {ComposeTweetContext, ComposeTweetProvider}