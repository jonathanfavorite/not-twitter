import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import  {AbreNum}  from "../../../../helpers/global-functions";
import "./WhatsHappeningListItem.scss";

export default function WhatsHappeningListItem(props) {
  const { details } = props;

  

  return (
    <>
      <div className="whats_happening_list_item">
        <div className="whats_happening_list_item_left">
          <div className="wh_subcategory">{details.subtext}</div>
          <div className="wh_title">{details.text}</div>
          <div className="th_desc">
            {details.trendingWith && (
              <Fragment>
                Trending with{" "}
                {details.trendingWith
                  .map((item, index) => (
                    <a key={index} className="wh_blue">
                      {item.text}
                    </a>
                  ))
                  .reduce(
                    (acc, x) => (acc === null ? [x] : [acc, ", ", x]),
                    null
                  )}
              </Fragment>
            )}
            {!details.trendingWith && (
              <Fragment>{AbreNum(details.tweets)} tweets</Fragment>
            )}
          </div>
        </div>
        <div className="whats_happening_list_item_right">
          {details.image && (
            <Fragment>
              <div
                className="wh_image"
                style={{
                  backgroundImage:
                    "url(" +
                    details.image +
                    ")",
                }}
              ></div>
            </Fragment>
          )}
        </div>
      </div>
    </>
  );
}
