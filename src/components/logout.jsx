import React from 'react'
import profile from '../assets/profile.svg'
import '../App.css'

export default function Logout() {
  return (
    <div>
      <div className='accountLog'>
        <img src={profile} alt="" />
        <a href="" className='visited:to-gray-700'>Login</a>
        /
        <a href="">Register</a>
      </div>
    </div>
  )
}
