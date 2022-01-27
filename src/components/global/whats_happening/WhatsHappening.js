import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'
import './WhatsHappening.scss'
import WhatsHappeningListItem from './WhatsHappeningListItem/WhatsHappeningListItem'




let whatsHappeningList = [
  {
    subtext: 'NFL . 1 hour ago',
    text: 'Rams at Buccaneers',
    trendingWith: [
      {
        text: 'Superbowl'
      },
      {
        text: '#Bucs'
      }
    ],
    tweets: 293001,
    image: 'bucs.jfif'
  },
  {
    subtext: 'Politics . Trending',
    text: 'Newt Gingrich',
    tweets: 15323
  },
  {
    subtext: 'COVID-19 · LIVE',
    text: 'COVID-19: News and updates for Florida',
    tweets: 39323,
    image: 'covid.jfif'
  },
  {
    subtext: 'Trending in Florida',
    text: 'Prevent',
    tweets: 423
  }
]

export default function WhatsHappening () {
  const [loading, setLoading] = useState(true)
  const [whatsHappening, setWhatsHappening] = useState([])

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  function handleSetWhatsHappening (arr) {
    let oldArr = []
    for (let i = 0; i < arr.length; i++) {
      oldArr.push(arr[i])
    }
    setWhatsHappening(oldArr)
  }


  

  const getWhatsHappening = async () => {
    let listOfItems = []
    let endpoint =
      'https://newsdata.io/api/1/news?apikey=pub_4033f18cc1668d8522720f15f36d531e6dc9&country=us&language=en'
    let response = await fetch(endpoint)
    if (response.status >= 200 && response.status <= 299) {
      let data = await response.json()
      console.log(data)
      for (let i = 0; i < data.results.length; i++) {
          
        // we need to get the time since the article was published
      //  let timeSince = timeSince(new Date(data.results[i].pubDate))


        let subtext =
          data.results[i].keywords != null
            ? data.results[i].keywords[i] + ' . 1 hour ago'
            : 'Trending now'

      //  console.log(data.results[i].keywords)

        let keyWordObjectList = null;
        if (data.results[i].keywords) {
            keyWordObjectList = [];
          for (let x = 0; x < data.results[i].keywords.length; x++) {
            keyWordObjectList.push({ text: data.results[i].keywords[x] })
            if (x >= 1) {
                break;
            }
          }
        }

        let tempItem = {
          subtext: subtext,
          text: data.results[i].title,
          trendingWith: keyWordObjectList,
          tweets: Math.floor(Math.random() * 100000),
          image: data.results[i].image_url
        }
        listOfItems.push(tempItem);

        console.log(data.results[i])
        if (i >= 2) {
            break;
        }

      }
    } else {
      console.log('networking err')
    }
    handleSetWhatsHappening(listOfItems)
    setLoading(false)
  }

  useState(() => {
    getWhatsHappening()
  }, [])

  return (
    <>
      <div className='right_sidebar_wrap'>
        <div id='whats_happening_wrap'>
          <h1>What's happening</h1>
          <div id='whats_happening_list'>
            {loading && <Loading />}
            {whatsHappening.map((item, key) => {
              return <WhatsHappeningListItem key={key} details={item} />
            })}

            <div className='whats_happening_list_item wh_show_more'>
              <a href='#' className=''>
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
