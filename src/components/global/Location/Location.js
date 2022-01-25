import React, { useState, useEffect } from 'react'
import './Location.scss'

export default function Location (props) {
  const { locationDetails } = props
  return (
    <>
      <div id='top_location_bar_sticky'>
        <div id='top_location_bar_main'>
          <div className='top_location_text'>Home</div>
        </div>
      </div>
    </>
  )
}
