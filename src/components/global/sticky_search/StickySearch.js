import React, { useState, useEffect, useRef, useContext } from 'react'
import './StickySearch.scss'
import SearchAutoFill from './SearchAutoFill/SearchAutoFill';
import { StickySearchContext } from '../../../contexts/StickySearchContext';
import { AppSettingsContext } from '../../../contexts/AppSettingsContextWrapper';
export default function StickySearch () {
  const searchBoxRef = useRef();
  const searchInputRef = useRef();
  const searchCtx = useContext(StickySearchContext);
  const settings = useContext(AppSettingsContext);

  function handleSearchBoxFocus()
  {
    searchCtx.setClickedResult(false);
    searchCtx.setHasFocused(true);
  }

  document.addEventListener("mousedown", handleOnBlur);

  function handleOnBlur(event) {
    if(searchBoxRef.current && !searchBoxRef.current.contains(event.target))
    {
      searchCtx.setHasFocused(false);
    }
  }
  function handleSearhBoxBlur(){
    if(search6Ctx.search !== '')
    {
   // searchCtx.setHasFocused(false);
    }
  }
  function handleSearchChange()
  {
    let val = searchInputRef.current.value;
    searchCtx.setSearch(old => val);
    
  }

  const fetchSearchResults = async () => {
    const response = await fetch(`${settings.endpointPrefix}/search/?query=${searchCtx.search}`);
   if(response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      const results = data.Response.results;
      if(results != null)
      {
        if(results.length > 0)
        {
          searchCtx.setSearchResults(old => results);
        }
        
      }
     
   }
  };
  

  useEffect(() => {
    
    let mounted = true;
    (async () => {
      searchCtx.setLoadingSearch(true);
      if(mounted)
      {
        if(searchCtx.hasFocused)
        {
          fetchSearchResults();
          //searchCtx.setLoadingSearch(false);
        }
      }
     
    })();
    return () => mounted = false;
  }, [searchCtx.search]);



  return (
    <>
      <div id='top_sticky_search_wrap' ref={searchBoxRef}>
      
        <div id='top_search_box' 
            onFocus={handleSearchBoxFocus} 
            className={
              (searchCtx.hasFocused) ? 'blue-border white-background' : ''
            }
        >
          <div className='top_search_indi icon_wrap'>
              <div className='top_search_icon'>
            <svg
              fill={searchCtx.hasFocused ? '#1ad1c2' : 'rgba(83,100,113,255)'}
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
                <input type='text' ref={searchInputRef} onKeyUp={handleSearchChange} placeholder={`Search TeamSpeak`} />
            </div>

           
        </div>

       
        {searchCtx.hasFocused && <SearchAutoFill />}
      </div>
    </>
  )
}
