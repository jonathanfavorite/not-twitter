import React, { useState, useEffect } from 'react'
import './Loading.scss'

export default function Loading () {
  return (
    <>
        <div className='loading_wrap'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}
