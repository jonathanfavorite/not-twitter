import React, { useState, useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import './WhatsHappeningListItem.scss'

export default function WhatsHappeningListItem (props) {
  const { details } = props

  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

  return (
    <>
      <div className='whats_happening_list_item'>
        <div className='whats_happening_list_item_left'>
          <div className='wh_subcategory'>{details.subtext}</div>
          <div className='wh_title'>{details.text}</div>
          <div className='th_desc'>
            {details.trendingWith && (
              <Fragment>
                Trending with {' '}
                {details.trendingWith.map((item, index) => <a key={index} className='wh_blue'>{item.text}</a>)
                .reduce((acc, x) => acc === null ? [x] : [acc, ', ', x], null)}
              </Fragment>
            )}
            {!details.trendingWith && (
                <Fragment>
                    {abbreviateNumber(details.tweets)} tweets
                </Fragment>
            )}
            
          </div>
        </div>
        <div className='whats_happening_list_item_right'>
          {details.image && (
            <Fragment>
              <div
                className='wh_image'
                style={{
                  backgroundImage:
                    'url(' + process.env.PUBLIC_URL + '/images/' + details.image + ')'
                }}
              ></div>
            </Fragment>
          )}
        </div>
      </div>
    </>
  )
}
