import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './SearchAutoFill.scss';
import AutoFillCard from './AutoFillCard/AutoFillCard';
import { AppSettingsContext } from "../../../../contexts/AppSettingsContextWrapper";
import { StickySearchContext } from '../../../../contexts/StickySearchContext';
export default function SearchAutoFill() {

    const RESULT_USER = 'RESULT_USER';
    const RESULT_HASHTAG = 'RESULT_HASHTAG';
    const RESULT_TWEET = 'RESULT_TWEET';
    const results = {}

    const searchContext = useContext(StickySearchContext);



    return (
        <>
        
            <div className="search_autofill_wrap">
            
                {searchContext.loadingSearch && 
                <div className='search_autofill_loading_wrap'>
                    <div className='autofill_loading' style={{
                        width: `${searchContext.loadingPercent}%`
                    }}></div>
                </div>
                }
                <div className="search_autofill_inner">
                {searchContext.searchResults && searchContext.searchResults.length > 0 ?
                    searchContext.searchResults.map((result, index) => {
                        return <AutoFillCard key={index} data={result} />
                    })
                    :
                    <div className='searchfor'>Try searching for people, topics, or keywords</div>
                }
                </div>
            </div>
        </>
    );
}