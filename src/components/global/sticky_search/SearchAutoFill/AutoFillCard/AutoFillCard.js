import React, {useState, useEffect, useContext} from 'react';
import './AutoFillCard.scss';
import {Link} from 'react-router-dom';
import VerifiedIcon from '../../../verified_icon/VerifiedIcon';
import { AppSettingsContext } from '../../../../../contexts/AppSettingsContextWrapper';
import { StickySearchContext } from '../../../../../contexts/StickySearchContext';
export default function AutoFillCard(props) {

   const {data, children} = props;
   const settings = useContext(AppSettingsContext);
   const searchContext = useContext(StickySearchContext);
   const [didClick, setDidClick] = useState(false);

   function limitedBio(characterCount)
   {
      if(data.bio)
      {
         if(data.bio.length > characterCount)
         {
            return data.bio.substring(0, characterCount) + '...';
         }
         return data.bio;
      }
      else
      {
         return '';
      }
   }

   return <>
   <div className='auto_fill_card'>
   <Link to={`/${data.username}`} onClick={() => searchContext.setHasFocused(false)}>
      <div className='card_image_container'>
         <div className='card_image' style={{
            backgroundImage: `url(${settings.imageDirectory}/profile/thumbnail/${data.profileImage})`
         }}>
            
         </div>
      </div>
      <div className='card_body'>
         <div className='displayname'>
            <div>{data.firstname} {data.lastname}</div>
            <div className='verified_icon'><VerifiedIcon /></div>
         </div>
         <div className='username'>
            @{data.username}
         </div>
         <div className='shortbio'>
            {limitedBio(30)}
         </div>
      </div>
      </Link>
   </div>
   </>
}