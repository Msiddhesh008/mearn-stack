import React from 'react'
import './Footer.css'
import { TbBrandEvernote, TbBrandGoogleDrive } from 'react-icons/tb'
import { BsGoogle, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer container-fluid'>
      <div className="container">
      <div className="row p-2">
          <div className="left-cnt col-7">
              <h1>All Rights Reserved</h1>
              <span>@SiddheshMore</span>
          </div>
          <div className="right-cnt col-5">
              <TbBrandEvernote />
              <TbBrandGoogleDrive />
              <BsGoogle />
              <BsYoutube />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Footer