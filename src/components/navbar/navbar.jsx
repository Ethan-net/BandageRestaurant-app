import React from 'react'
import '../../App.css'

import searchlogo from '../../assets/searlogo.svg'
import likelogo from '../../assets/likelove.svg'
import cartlogo from '../../assets/cartbox.svg'
import arrowdown from '../../assets/arrowdown.svg'
import Logout from '../logout'
import Logo from '../logo'


export default function Navbar() {
  return (
    <div className='navBar'>
      <Logo/>
      <div className='center-cont'> 
        <a href=""><strong>Home</strong></a>
        <a href="">Shop<img src={arrowdown}></img> </a>
        <a href=""><strong>About</strong></a>
        <a href=""><strong>Blog</strong></a>
        <a href=""><strong>Contact</strong></a>
        <a href=""><strong>Pages</strong></a>
      </div>
      <Logout/>
      <div className='icons'>
        <img src={searchlogo} alt="" />
        <img src={cartlogo} alt="" />
        <img src={likelogo} alt="" />
      </div>
      
    </div>
  )
}
