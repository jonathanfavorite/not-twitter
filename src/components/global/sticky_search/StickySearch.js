import React, { useState, useEffect, useRef } from 'react'
import './StickySearch.scss'

export default function StickySearch () {
  const [hasFocused, setHasFocused] = useState(false)
  const searchBoxRef = useRef();

  function handleSearchBoxFocus()
  {
    setHasFocused(true);
  }
  function handleSearhBoxBlur(){
    setHasFocused(false);
  }

  return (
    <>
      <div id='top_sticky_search_wrap'>
        <div id='top_search_box' 
            onBlur={handleSearhBoxBlur} 
            onFocus={handleSearchBoxFocus} 
            useref={searchBoxRef}
            className={
              (hasFocused) ? 'blue-border white-background' : ''
            }
        >
          <div className='top_search_indi icon_wrap'>
              <div className='top_search_icon'>
            <svg
              fill={hasFocused ? 'rgb(29, 155, 240)' : 'rgba(83,100,113,255)'}
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <g>
                <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
              </g>
            </svg>
            </div>
          </div>

            <div className='top_search_indi'>
                <input type='text' placeholder='Search Twitter' />
            </div>

        </div>
      </div>
    </>
  )
}
