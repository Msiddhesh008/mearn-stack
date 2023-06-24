import React, { Fragment, useState } from 'react'
import './Header.css'
import { HiMenuAlt2 } from 'react-icons/hi'

const Header = () => {

    const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Fragment>
    <div 
    style={{
      left:`${isOpen ? `0` : `-30vw`}`
    }}
    onClick={() => setIsOpen(!isOpen)}
    className="slider">
      
    <div className="slider-logo-cnt p-2">
    <span style={{ 
      fontFamily: "Lobster", 
      color: '#2f3640',
      fontSize:'1.8rem'
      }}>Lobster</span>      
    </div>  
    </div>


    <div className="logo-cnt">
    <HiMenuAlt2 
    onClick={() => setIsOpen(!isOpen)}
    className='hamburger' />
    <span className='logo'>Lobster</span>
    </div>
    </Fragment>
  )
}

export default Header