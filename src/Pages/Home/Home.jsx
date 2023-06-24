import React from 'react'
import './Home.css'
import computer from '../../Assets/Images/computer.png'
import { BsGoogle, BsYoutube } from 'react-icons/bs'
import { SiUdemy } from 'react-icons/si'
import { TbBrandEvernote, TbBrandGoogleDrive } from 'react-icons/tb'
import introVideo from '../../Assets/Videos/introVideo.mp4'

const Home = () => {

  return (
    <div id="home">
      
      <div className="container-fluid home">
      <div className="container h-100">
        <div className="row h-100">
        <div className="col-lg-7 col-12 home-left p-lg-4 p-4 h-100">
          <h1>LEARN FROM THE EXPERTS</h1>
          <p>Find Valuable Content At Reasonable Price</p>
          <button className='pt-2 pb-2 ps-3 pe-3'>Explore Now</button>
        </div>
        <div className="col-lg-5 col-12 home-right p-lg-5 p-4 h-100">
          <img src={computer} alt="computer" width={350} />
        </div>

        </div>
      </div>
      </div>

      <div className="container-fluid brand-cnt">
      <div className="row justify-content-end  p-4">
        <h1 className='p-2'>Our Brands</h1>
        <div className="col-2 m-2"><BsGoogle /></div>
        <div className="col-2 m-2"><BsYoutube /></div>
        <div className="col-2 m-2"><SiUdemy /></div>
        <div className="col-2 m-2"><TbBrandEvernote /></div>
        <div className="col-2 m-2"><TbBrandGoogleDrive /></div>
      </div>
      </div>

      <div className="container-fluid">
      <div className="container video-cnt">
        <video 
        autoplay 
        controls 
        controlsList='nodownload nofullscreen noremoteplaback'
        disableRemotePlayback
        disablePictureInPicture
        src={introVideo} 
        width={800} 
        height={500} ></video>
      </div>
      </div>
    </div>
  )
}

export default Home