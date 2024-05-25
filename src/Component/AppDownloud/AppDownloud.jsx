import React from 'react';
import { assets } from '../../assets/assets';
import appDownCss from './appDownloud.module.css'
export default function AppDownloud() {
  return (
   <div className="container m-auto text-center mb-3 mt-5" id='appDownload'>
      <div className='fw-bold fs-3'> For Better Exdiverience Download <p> Tomato App </p></div>
      <div className="row">

        <div className={appDownCss.row}>

          <img  className={appDownCss.imagePlay} src={assets.play_store} alt="playStore" />
          <img className={appDownCss.imageStore} src={assets.app_store} alt="appStore" />

        </div>

         
      </div>
   </div>
  )
}
