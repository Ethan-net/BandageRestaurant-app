import React, { useState, useEffect } from 'react';
import '../App.css';
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'


export default function Hero() {
    return(
        <div className='herobrg'>
            <img src={leftarrow} alt="" className='leftarrow' />
            <img src={rightarrow} alt="" className='rightarrow' />
            <h1>GROCERIES DELIVERY</h1>
            <p>We know how large objects will act, but things on a<br/> 
            small scale just do not act that way.</p>
            <button>Start Now</button>
        </div>
    )
  
}