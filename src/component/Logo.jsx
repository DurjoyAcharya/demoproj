import React from 'react'
import './css/Img.css'
import logo from './img/logo.png'
const Logo = () => {
    return (
    <div className='logo'>
      <img src={logo} alt="logo" width={150} height={80} />
    </div>
  )
}

export default Logo
